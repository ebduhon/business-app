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

import { SignIn } from './sign-in.model';
import * as SignInActions from './sign-in.actions';
type Action = SignInActions.All;

//TODO: review if creating multiple of the same featureSelector on the same state,
// in this case 'identity' such as the below constant exactly occurs in the role.facade 
// does the duplication of this kind of code cause any issues internal to ngrx
export const selectAuthState = createFeatureSelector<AuthState>('auth');
// review how TypeScript namespaces work and if exporting an selector or featureSelector breaks internal to ngrx
export const selectSignInState = createSelector(
  selectAuthState,
  (state: AuthState) => state.signIn
);

// Action Deciders:
// Filtering Decider
// Content-Based Decider
// Context-Based Decider
// Splitter
// Aggregator

// Action Transformers:
// Content-Enricher
// Normalizer & Canonical Actions

import * as StatusActions from '../status/status.actions';
import * as UserPresenceActions from '../user-presence/user-presence.actions';

@Injectable()
export class SignInFacade {
    
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  signIn$ = this.store.select(selectSignInState);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  @Effect({ dispatch: false })
  signInRequest$: Observable<any> = this.actions$.ofType(SignInActions.SIGN_IN_REQUEST)
    .map((action: SignInActions.SignInRequest) => action.payload)
    .switchMap(payload => {
      return Observable.fromPromise(this.signInWithEmailAndPassword(payload))
        .map((payload) => {
          // this.store.dispatch(new UserPresenceActions.OpenConnection());
          this.store.dispatch(new SignInActions.SignInSuccess());
        })
        .catch(err => {
          return Observable.of(new SignInActions.SignInFailure({ error: err }));
        });
    })
    .catch(err => {
      return Observable.of(console.log('critical error at signInRequest$ observer chain closed.', err));
    });
  
  // @Effect()
  // signInRequest$: Observable<any> = this.actions$.ofType(SignInActions.SIGN_IN_REQUEST)
  //   .map((action: SignInActions.SignInRequest) => action.payload)
  //   .exhaustMap((payload) => {
  //     return Observable.fromPromise(this.signInWithEmailAndPassword(payload))
  //       .map((user) => new SignInActions.SignInSuccess(user))
  //       .catch((error) => of(new SignInActions.SignInFailure(error)))
  //   });
  
  @Effect({ dispatch: false })
  signInSuccess$: Observable<any> = this.actions$.ofType(SignInActions.SIGN_IN_SUCCESS)
    .map((action: SignInActions.SignInSuccess) => action.payload)
    .do((payload) => {
      console.log('effect signInSuccess$ payload: ', payload);
      //TODO: this.router.navigate is called by authenticated$, the signIn() method emit values that causes the angularFire2 AuthState Observer to trigger,
      // since the loadUserRequest$ implements the angularfire2 AuthState it fires any time values emit on signIn or signOut;
      // therefore, this behavior is causing actions to automatically become correlated SignInActions that affect angularfire AuthState automatically cause UserActions LoadUserSuccess or LoadUserFailure actions to fire, these UserActions dispatch StatusActions Authenticated or NotAuthenticated,
      // the other actions and subsequent inner actions that are automatically fired may fire multiple times, 
      // since the StatusActions.Authenticated contains logic to navigate since the actions are incidentally fired multiple times in parallel due to the angularfire AuthState observer, router.navigate is called multiple times in parallel or in quick succession which causes the angular router to cancel the route, normalize the router state then reattempt the route navigation, this is causing multiple actions to fire in parallel multiple times
      // This behavior is further exacerbated by the auth feature module being loaded by multiple modules, some of these modules are loaded eagerly and others are loaded lazily which causes the auth module feature state added to global store as the module is loaded, since the feature module is loaded, the navigation call lazily loads the module retriggering init$ effect multiple times causing unpredictable recursion behavior
      
      // An effect imported by a single lazy loaded module, will be loaded again every time that route is hit.
      this.store.dispatch(new UserPresenceActions.OpenConnection());
      this.store.dispatch(new SignInActions.SignInComplete());
      
    });
  
  @Effect({ dispatch: false })
  signInFailure$: Observable<any> = this.actions$.ofType(SignInActions.SIGN_IN_FAILURE)
    .map((action: SignInActions.SignInFailure) => action.payload)
    .do((payload) => {
      console.log('effect signInFailure$ payload: ', payload);
      //TODO: display error reason to the user in the app user interface, log the failure to the database to assist with future development and provide insight to any potential issues
      
      this.store.dispatch(new SignInActions.SignInComplete());
      
    });
  
  //TODO: signInRedirect$
  
  @Effect({ dispatch: false })
  init$: Observable<any> = defer(() => {
    //console.log('sign-in.facade init$ effect');
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
  
  signIn({ email, password}) {
    console.log('effect signIn: ' + 'email: ' + email + ' password: ' + password);
    
    this.store.dispatch(new SignInActions.SignInRequest({ email, password }));
    return this.signIn$;
  }
  
  // ************************************************************
  // Internal Methods
  // ************************************************************

  protected signInWithEmailAndPassword({email, password}): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  
}
