import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

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

import { Persistence } from './persistence.model';
import * as PersistenceActions from './persistence.actions';
type Action = PersistenceActions.All;

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectPersistenceState = createSelector(
  selectAuthState,
  (state: AuthState) => state.persistence
);

@Injectable()
export class PersistenceFacade {
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  persistence$ = this.store.select(selectPersistenceState);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  @Effect({ dispatch: false })
  loadPersistenceRequest$: Observable<any> = this.actions$.ofType(PersistenceActions.LOAD_PERSISTENCE_REQUEST)
    .map((action: PersistenceActions.LoadPersistenceRequest) => action.payload)
    .switchMap(payload => {
      return Observable.fromPromise(this._setPersistence())
        .map((data) => console.log('loadPersistenceRequest$ data: ', data))
        .catch((error) => Observable.of(console.log('loadPersistenceRequest$ error: ', error)))
    })
    .map((payload) => {
      // if payload contains data it is the error thrown by firebase api on the .setPersistence() method
      if (payload) {
        console.log('loadPersistenceRequest$ payload: ', payload);
      } else {
        console.log('loadPersistenceRequest$ !payload: ', payload);
      }
    });
    
  @Effect({ dispatch: false })
  init$: Observable<any> = defer(() => {
    //console.log('persistence.facade init$ effect');
    this.store.dispatch(new PersistenceActions.LoadPersistenceRequest({ persistenceType: 'session' }));
  });
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store<AuthState>,
    private afDb: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {}
  
  // ************************************************************
  // Internal Methods
  // ************************************************************
  
  protected _setPersistence(): Promise<any> {
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  }
  
}