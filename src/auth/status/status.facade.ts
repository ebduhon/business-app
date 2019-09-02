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
import { Status } from './status.model';
import * as StatusActions from './status.actions';
// type Action = StatusActions.All;
import { Action } from '@ngrx/store';

//TODO: review if creating multiple of the same featureSelector on the same state,
// in this case 'identity' such as the below constant exactly occurs in the role.facade 
// does the duplication of this kind of code cause any issues internal to ngrx
export const selectAuthState = createFeatureSelector<AuthState>('auth');
// review how TypeScript namespaces work and if exporting an selector or featureSelector breaks internal to ngrx
export const selectStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const selectStatusIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.status.isAuthenticated
);


@Injectable()
export class StatusFacade {
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  status$ = this.store.select(selectStatusState);
  
  statusIsAuthenticated$ = this.store.select(selectStatusIsAuthenticated);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  @Effect({ dispatch: false })
  authenticated$: Observable<any> = this.actions$.ofType(StatusActions.AUTHENTICATED)
    .map((action: StatusActions.Authenticated) => action.payload)
    .do((payload) => {
      console.log('effect authenticated$ payload: ', payload);
      this.router.navigate(['/secure']);
    });
  
  @Effect({ dispatch: false })
  notAuthenticated$: Observable<any> = this.actions$.ofType(StatusActions.NOT_AUTHENTICATED)
    .map((action: StatusActions.NotAuthenticated) => action.payload)
    .do((payload) => {
      console.log('effect notAuthenticated$ payload: ', payload);
      // this.router.navigate(['/sign-in']); // redirect if not authenticated to sign-in only in router guards on child routes of the '/secure' feature area
    });
  
  //TODO:
  // Review the following reference code example controlling Effects "OnRunEffects" ngrxOnRunEffects and the exhaustMap() operator in conjunction with the takeUntil() operator on this.actions$.ofType('LOGGED_OUT')
  // Reference: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#controlling-effects
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  
  loadStatusIsAuthenticated() {
    let isAuthenticated: any;
    this.statusIsAuthenticated$.take(1).subscribe(data => isAuthenticated = data);
    return isAuthenticated;
  }
  
  checkStatusIsAuthenticated() {
    return this.statusIsAuthenticated$
      .map((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['sign-in']);
          
          return isAuthenticated;
        } else {
          return isAuthenticated;
        }
      })
      .first();
  }
  
  
  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store<AuthState>,
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase,
    private afStore: AngularFirestore
  ) {
    
  }
  
  // ************************************************************
  // Internal Methods
  // ************************************************************

}