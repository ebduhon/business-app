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
import 'rxjs/add/observable/from';

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

import { Connectivity } from './connectivity.model';
import * as ConnectivityActions from './connectivity.actions';
type Action = ConnectivityActions.All;

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectConnectivityState = createSelector(
  selectAuthState,
  (state: AuthState) => state.connectivity
);

export const selectConnectivityIsActivated = createSelector(
  selectAuthState,
  (state: AuthState) => state.connectivity.activated
);

export const selectConnectivityIsVisible = createSelector(
  selectAuthState,
  (state: AuthState) => state.connectivity.visible
);

export const selectConnectivityIsConnected = createSelector(
  selectAuthState,
  (state: AuthState) => state.connectivity.connected
);

export const selectConnectivityIsLoading = createSelector(
  selectAuthState,
  (state: AuthState) => state.connectivity.loading
);

@Injectable()
export class ConnectivityFacade {
  
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  connectivity$ = this.store.select(selectConnectivityState);
  connectivityIsActivated$ = this.store.select(selectConnectivityIsActivated);
  connectivityIsVisible$ = this.store.select(selectConnectivityIsVisible);
  connectivityIsConnected$ = this.store.select(selectConnectivityIsConnected);
  connectivityIsLoading$ = this.store.select(selectConnectivityIsLoading);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  // @Effect({ dispatch: false })
  // initializeConnect$: Observable<any> = this.actions$.ofType(ConnectivityActions.INITIALIZE_CONNECTION)
  //   .map((action: ConnectivityActions.InitializeConnection) => action.payload)
  //   .switchMap(())
  
  
  @Effect()
  establishConnection$: Observable<any> = this.actions$.ofType(ConnectivityActions.ESTABLISH_CONNECTION)
    .map((action: ConnectivityActions.EstablishConnection) => action.payload)
    .switchMap(() => {
      
      const connectionSessionEnded$ = this.actions$.ofType(ConnectivityActions.CONNECTION_SESSION_ENDED);
      
      return this._establishConnection()
        .takeUntil(connectionSessionEnded$)
        .map(connectivity => {
          let connection = connectivity ? new ConnectivityActions.Connected({ connected: connectivity }) : new ConnectivityActions.Disconnected({ connected: connectivity });
          console.log(connection);
          return connection;
        })
        .catch((err) => of(new ConnectivityActions.ConnectivityError(err)));
    });
    
    
    
  @Effect({ dispatch: false })
  init$: Observable<any> = defer(() => {
    //console.log('connectivity.facade init$ effect');
    //this.store.dispatch(new ConnectivityActions.EstablishConnection());
    // this.store.dispatch(new ConnectivityActions.InitializeConnection({ loading: true }));
  });
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  //TODO: related to framework user-interface configuration options
  configureConnectivity(connectivityConfig) {
    this.store.dispatch(new ConnectivityActions.ConfigureConnectivity(connectivityConfig));
    return this.connectivity$;
  }
  
  //TODO: related to framework user-interface configuration options
  activateConnectivity() {
    this.store.dispatch(new ConnectivityActions.ConfigureConnectivity({ activated: true }));
    return this.connectivity$;
  }
  
  //TODO: related to framework user-interface configuration options
  deactivateConnectivity() {
    this.store.dispatch(new ConnectivityActions.ConfigureConnectivity({ activated: false }));
    return this.connectivity$;
  }
  
  //TODO: related to framework user-interface configuration options
  showConnectivity() {
    this.store.dispatch(new ConnectivityActions.ShowConnectivity({ visible: true }));
    return this.connectivity$;
  }
  
  //TODO: related to framework user-interface configuration options
  hideConnectivity() {
    this.store.dispatch(new ConnectivityActions.HideConnectivity({ visible: false }));
    return this.connectivity$;
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
  
  private _initializeConnection() {
    return this.store.dispatch(new ConnectivityActions.EstablishConnection());
  }
  
  private _establishConnection() {
    return this.afDb.object('.info/connected').valueChanges();
  }
  
  private _persistConnection() {
    
  }
  
  
  
}