import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { defer } from 'rxjs/observable/defer';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/take';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { AuthState } from '../auth.state';
import { SignOut } from './sign-out.model';
import * as SignOutActions from './sign-out.actions';
type Action = SignOutActions.All;

//TODO: review if creating multiple of the same featureSelector on the same state,
// in this case 'identity' such as the below constant exactly occurs in the role.facade 
// does the duplication of this kind of code cause any issues internal to ngrx
export const selectAuthState = createFeatureSelector<AuthState>('auth');
// review how TypeScript namespaces work and if exporting an selector or featureSelector breaks internal to ngrx
export const selectSignOutState = createSelector(
  selectAuthState,
  (state: AuthState) => state.signOut
);

import * as StatusActions from '../status/status.actions';
import * as UserPresenceActions from '../user-presence/user-presence.actions';

@Injectable()
export class SignOutFacade {
    
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  signOut$ = this.store.select(selectSignOutState);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  //TODO: StatusActions.NotAuthenticated()
  //TODO: StatusActions.UpdateConnectionDisconnected()
  //TODO: StatusActions.UpdateUserPresenceOffline()
  //TODO: SignOutActions.SignOutRedirect()
  //TODO: RootActions.ClearStore()
  // @Effect()
  // signOutRequest$: Observable<any> = this.actions$.ofType(SignOutActions.SIGN_OUT_REQUEST)
  //   .map((action: SignOutActions.SignOutRequest) => action.payload)
  //   .switchMap((payload) => {
  //     return Observable.fromPromise(this._signOut());
  //   })
  //   .mergeMap((results) => {
  //     return [
  //       new SignOutActions.SignOutSuccess(),
        
  //     ];
  //   })
  //   .catch((err) => {
  //     //TODO: review error handling at this level whether it needs to be moved a level deeper to prevent completing this effect thus closing the stream
  //     return Observable.of(new SignOutActions.SignOutFailure({ error: err }))
  //   });
  
  @Effect({ dispatch: false })
  signOutRequest$: Observable<any> = this.actions$.ofType(SignOutActions.SIGN_OUT_REQUEST)
    .map((action: SignOutActions.SignOutRequest) => action.payload)
    .switchMap((payload) => {
      return Observable.fromPromise(this._signOut());
    })
    .map((results) => {
      this.store.dispatch(new SignOutActions.SignOutSuccess());
    })
    .catch((err) => {
      //TODO: review error handling at this level whether it needs to be moved a level deeper to prevent completing this effect thus closing the stream
      return Observable.of(new SignOutActions.SignOutFailure({ error: err }))
    });
  
  @Effect({ dispatch: false })
  signOutSuccess$: Observable<any> = this.actions$.ofType(SignOutActions.SIGN_OUT_SUCCESS)
    .map((action: SignOutActions.SignOutSuccess) => action.payload)
    .do((payload) => {
      console.log('effect signOutSuccess$ payload: ', payload);
      //TODO: payload = { isAuthenticated = false }
      //TODO: this.router.navigate
      
      // development temporary, remove after testing the statusObserver
      // move to a more appropriate sign-out-redirect action
      this.router.navigate(['/sign-in']);
      
      //!IMPORTANT: this prevents an ngrx/effects and firebase bug by reloading the page on sign-out the ngrx/effects and firebase subscriptions are reinstantiated
      // This prevents duplication of connections and related subscriptions, a better sequential composition to wrap and dispose firebase connections, user presence, and authState would be a better implementation that does not rely on reload
      location.reload(); 
      
    })
    .map((payload) => {
      return new SignOutActions.SignOutComplete(payload);
    });
  
  @Effect({ dispatch: false })
  signOutFailure$: Observable<any> = this.actions$.ofType(SignOutActions.SIGN_OUT_FAILURE)
    .map((action: SignOutActions.SignOutFailure) => action.payload)
    .do((payload) => {
      console.log('effect signOutFailure$ payload: ', payload);
      //TODO: display error reason to the user in the app user interface, log the failure to the database to assist with future development and provide insight to any potential issues
    })
    .map((payload) => {
      return new SignOutActions.SignOutComplete(payload);
    });
  
  @Effect({ dispatch: false })
  init$: Observable<any> = defer(() => {
    //console.log('sign-out.facade init$ effect');
  });
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store<AuthState>,
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase,
    private afStore: AngularFirestore
  ) {
    
  }
  
  //TODO: signOut(): Observable<User> | Observable<Authenticate> {}
  signOut() {
    console.log('effect signOut');
    this.store.dispatch(new UserPresenceActions.UpdateUserPresenceRequest({ presenceType: 'offline' }));
    this.store.dispatch(new UserPresenceActions.CloseConnection());
    this.store.dispatch(new SignOutActions.SignOutRequest());
    //TODO: updatePresence when signOut is called
    return this.signOut$;
  }
  
  // ************************************************************
  // Internal Methods
  // ************************************************************
  
  //TODO: review if it is necessary to create an internal protected method similar to signIn, but in the context of the method to signOut via firebase or this.afAuth.auth.signOut()
  protected _signOut(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
  
}