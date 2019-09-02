import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { of } from 'rxjs/observable/of';
import { defer } from 'rxjs/observable/defer';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/withLatestFrom';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { AuthState } from '../auth.state';

import { UserPresence } from './user-presence.model';
import * as UserPresenceActions from './user-presence.actions';
type Action = UserPresenceActions.All;

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUserPresenceState = createSelector(
  selectAuthState,
  (state: AuthState) => state.userPresence
);

export const selectUserPresenceIsActivated = createSelector(
  selectAuthState,
  (state: AuthState) => state.userPresence.activated
);

export const selectUserPresenceIsVisible = createSelector(
  selectAuthState,
  (state: AuthState) => state.userPresence.visible
);

export const selectUserPresencePresenceType = createSelector(
  selectAuthState,
  (state: AuthState) => state.userPresence.presenceType
);

export const selectUserPresenceCurrentConnectionId = createSelector(
  selectAuthState,
  (state: AuthState) => state.userPresence.currentConnectionId
);

export const selectUserPresenceConnectionsCount = createSelector(
  selectAuthState,
  (state: AuthState) => state.userPresence.connectionsCount
);

//import * as UserFirebaseIdentityActions from '../user-firebase-identity/user-firebase-identity.actions';

@Injectable()
export class UserPresenceFacade {
  
  mouseEvents: Subscription; //TODO: .unsubscribe()
  timer: Subscription; //TODO: .unsubscribe()
  
  //TODO: change the timer value to adjust duration that must pass before the user's status is to be changed to 'away'
  timerIdleDuration: any; //TODO: .unsubscribe() // number | string | Date  
  
  private currentUserId: string;
  private presenceType: string;
  private currentConnectionId: string;
  private connectionsCount: number;
  
  //TODO: moment.js && AWS ISO Timestamp && firebase.database.ServerValue.TIMESTAMP
  //private lastOnline: any;
  
  currentUserPresenceObserver = {
    next: (data) => {
      console.log('user-presence.facade currentUserPresenceObserver next: ');
      console.log(data);
    },
    error: (err) => {
      console.log('user-presence.facade currentUserPresenceObserver error: ');
      console.log(err);
    },
    complete: () => {
      console.log('user-presence.facade currentUserPresenceObserver complete.');
    }
  };
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  userPresence$ = this.store.select(selectUserPresenceState);
  userPresenceIsActivated$ = this.store.select(selectUserPresenceIsActivated);
  userPresenceIsVisible$ = this.store.select(selectUserPresenceIsVisible);
  userPresencePresenceType$ = this.store.select(selectUserPresencePresenceType);
  userPresenceCurrentConnectionId$ = this.store.select(selectUserPresenceCurrentConnectionId);
  userPresenceConnectionsCount$ = this.store.select(selectUserPresenceConnectionsCount);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  @Effect({ dispatch: false })
  updateUserPresenceRequest$: Observable<any> = this.actions$.ofType(UserPresenceActions.UPDATE_USER_PRESENCE_REQUEST)
    .map((action: UserPresenceActions.UpdateUserPresenceRequest) => action.payload)
    .do((payload) => {
      this.presenceType = payload.presenceType;
      console.log('effect updateUserPresenceRequest$ payload: ', payload);
      this._updatePresence(this.presenceType);
      
    });
  
  @Effect({ dispatch: false })
  openConnection$: Observable<any> = this.actions$.ofType(UserPresenceActions.OPEN_CONNECTION)
    .map((action: UserPresenceActions.OpenConnection) => action.payload)
    .do((payload) => {
      
      this._goOnline();
      
      
    });
  
  @Effect({ dispatch: false })
  closeConnection$: Observable<any> = this.actions$.ofType(UserPresenceActions.CLOSE_CONNECTION)
    .map((action: UserPresenceActions.CloseConnection) => action.payload)
    .do((payload) => {
      this._updateLastOnline();
      this._goOffline();

    });
    
  @Effect({ dispatch: false })
  init$: Observable<any> = defer(() => {
    //console.log('user-presence.facade init$ effect');
    
    this._currentUserPresence();
    
    
  });
    
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  //TODO: related to framework user-interface configuration options
  configureUserPresence(userPresenceConfig) {
    this.store.dispatch(new UserPresenceActions.ConfigureUserPresence(userPresenceConfig));
    return this.userPresence$;
  }
  
  //TODO: related to framework user-interface configuration options
  activateUserPresence() {
    this.store.dispatch(new UserPresenceActions.ConfigureUserPresence({ activated: true }));
    return this.userPresence$;
  }
  
  //TODO: related to framework user-interface configuration options
  deactivateUserPresence() {
    this.store.dispatch(new UserPresenceActions.ConfigureUserPresence({ activated: false }));
    return this.userPresence$;
  }
  
  //TODO: related to framework user-interface configuration options
  showUserPresence() {
    this.store.dispatch(new UserPresenceActions.ShowUserPresence({ visible: true }));
    return this.userPresence$;
  }
  
  //TODO: related to framework user-interface configuration options
  hideUserPresence() {
    this.store.dispatch(new UserPresenceActions.HideUserPresence({ visible: false }));
    return this.userPresence$;
  }
  
  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store<AuthState>,
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase,
    private afStore: AngularFirestore
  ) {}
  
    
  // ************************************************************
  // Internal Methods
  // ************************************************************
  
  protected _currentUserPresence() {
    this.afAuth.authState
      .do(user => {
        if (user) {
          this.currentUserId = user.uid;
          this._updateOnConnect();
          this._updateOnIdle();
          this._updateOnDisconnect();
    
        }
      })
      .subscribe(this.currentUserPresenceObserver);
  }
  
  protected _updateOnConnect() {
    
    return this.afDb.object('.info/connected').snapshotChanges()
      .do((connectivityChanges) => {
        
        console.log('connectivityChanges: ', connectivityChanges);
        
        this._simultaneousConnections();
        
        
        let currentConnectionRef = firebase.database().ref(`development-users/${this.currentUserId}/connections`);
        
        if(connectivityChanges.payload.val() === true) {
          console.log('connectivityChanges: connected or reconnected');
          
          // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
          
          
          let currentConnection = currentConnectionRef.push();
          let currentConnectionPromise = currentConnection.onDisconnect().remove();

          currentConnectionPromise
            .then(_ => {
              console.log('currentConnectionPromise: success');
            })
            .catch(err => console.log(err, 'currentConnectionPromise: You do not have access!'));
            
          // Add this device to my connections list
          // this value could contain info about the device or a timestamp too
          currentConnection.set(true);
          
          this.store.dispatch(new UserPresenceActions.EstablishUserPresence({ currentConnectionId: currentConnection.key }));
          //TODO: dispatch action
          
        } else {
          console.log('connectivityChanges: not connected');
          
        }
        
      })
      .subscribe();
  }
  
  protected _updateOnDisconnect() {

    console.log('updateOnDisconnect fired.');
    
    let lastOnlineRef = firebase.database().ref(`development-users/${this.currentUserId}/lastOnline`);
    let presenceTypeRef = firebase.database().ref(`development-users/${this.currentUserId}/presenceType`);
    
    // When I disconnect, update the last time I was seen online
    lastOnlineRef.onDisconnect().set(firebase.database.ServerValue.TIMESTAMP);
    //TODO: dispatch action
    
    // When I disconnect, update the presenceType to offline
    presenceTypeRef.onDisconnect().set('offline');
    //TODO: dispatch action
    

  }
  
  protected _updatePresence(presenceType) {
    if (!this.currentUserId) {
      return;
    }
    
    this.afDb.object(`development-users/${this.currentUserId}`).update({ presenceType: presenceType});
    this.store.dispatch(new UserPresenceActions.EstablishUserPresence({ presenceType: presenceType }));
  }
  
  protected _updateLastOnline() {
    if (!this.currentUserId) {
      return;
    }
    this.afDb.object(`development-users/${this.currentUserId}`).update({ lastOnline: firebase.database.ServerValue.TIMESTAMP });
  }
  
  protected _simultaneousConnections() {
    let simultaneousConnectionsRef = this.afDb.object(`development-users/${this.currentUserId}/connections/`);
        
    simultaneousConnectionsRef.valueChanges().subscribe((simultaneousConnections) => {
      if (simultaneousConnections == null) {
        return;
      }
      
      console.log('currentUserConnections count: ', Object.keys(simultaneousConnections).length);
      this.connectionsCount = Object.keys(simultaneousConnections).length;
      if(this.connectionsCount > 0) {
        this.presenceType = 'online';
        this._updatePresence(this.presenceType);
      }
      
      this.store.dispatch(new UserPresenceActions.EstablishUserPresence({ connectionsCount: this.connectionsCount }));
      
      return this.connectionsCount;
    });
  }
  
  // Listen for mouse events to update presenceType
  protected _updateOnIdle() {
    
    this.mouseEvents = Observable
      .fromEvent(document, 'mousemove')
      .throttleTime(60000)
      .do(() => {
        this.presenceType = 'online';
        this._updatePresence(this.presenceType);
        this._resetTimer();
      })
      .subscribe();
  }
  
  // Reset the timer
  protected _resetTimer() {
    // unsubscribe from the subscription if a timer already exists in the application
    if (this.timer) {
      this.timer.unsubscribe();
    }
    
    this.timer = Observable.timer(900000) //TODO: change the timer value to adjust duration that must pass before the user's status is to be changed to 'away'
      .do(() => {
        this.presenceType = 'away';
        this._updatePresence(this.presenceType);
      })
      .subscribe();
  }
  
  protected _goOnline() {
    
    return firebase.database().goOnline();
  }
  
  protected _goOffline() {
    
    return firebase.database().goOffline();
  }
  


}