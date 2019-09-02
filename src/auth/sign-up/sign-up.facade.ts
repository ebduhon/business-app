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

import { SignUp } from './sign-up.model';
import * as SignUpActions from './sign-up.actions';
type Action = SignUpActions.All;

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectSignUpState = createSelector(
  selectAuthState,
  (state: AuthState) => state.signUp
);

//TODO: getSignUpStateErrorCode
//TODO: getSignUpStateErrorMessage
//TODO: getSignUpStateLoading

//TODO: toggleFeatureConfigs
//TODO: setFeatureConfig

@Injectable()
export class SignUpFacade {

  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  signUp$ = this.store.select(selectSignUpState);
  
  //TODO: signUpErrorCode$ = this.store.select(getSignUpStateErrorCode);
  //TODO: signUpErrorMessage$ = this.store.select(getSignUpStateErrorMessage);
  //TODO: loading$ = this.store.select(getSignUpStateLoading);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  @Effect()
  signUpRequest$: Observable<Action> = this.actions$.ofType(SignUpActions.SIGN_UP_REQUEST)
    .map((action: SignUpActions.SignUpRequest) => action.payload)
    .switchMap(payload => {
      return Observable.fromPromise(this.createUserWithEmailAndPassword(payload))
    })
    .map((user) => {
      return new SignUpActions.SignUpSuccess(user);
    })
    .catch((err) => {
      return Observable.of(new SignUpActions.SignUpFailure({errorCode: err.code, errorMessage: err.message}));
    });
  
  @Effect()
  signUpSuccess$: Observable<Action> = this.actions$.ofType(SignUpActions.SIGN_UP_SUCCESS)
    .map((action: SignUpActions.SignUpSuccess) => action.payload)
    .delay(2000)
    .do(payload => {
      console.log('effect signUpSuccess$ payload: ', payload);
    })
    .map((payload) => {
      return new SignUpActions.SignUpComplete(payload);
    });
  
  @Effect({ dispatch: false})
  signUpFailure$: Observable<Action> = this.actions$.ofType(SignUpActions.SIGN_UP_FAILURE)
    .map((action: SignUpActions.SignUpFailure) => action.payload)
    .delay(2000)
    .do(payload => {
      console.log('effect signUpFailure$ payload: ', payload);
    })
    .map((payload) => {
      return null;
    });
  
  @Effect({ dispatch: false })
  signUpComplete$: Observable<Action> = this.actions$.ofType(SignUpActions.SIGN_UP_COMPLETE)
    .map((action: SignUpActions.SignUpComplete) => action.payload)
    .delay(2000)
    .do(payload => {
      console.log('effect signUpComplete$ payload: ', payload);
    })
    .map((payload) => {
      return null;
    });
  
  @Effect({ dispatch: false })
  init$: Observable<any> = defer(() => {
    //console.log('sign-up.facade init$ effect');
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
  
  signUp({ email, password }) {
    console.log('effect signUp: ' + 'email: ' + email + ' password: ' + password);
    this.store.dispatch(new SignUpActions.SignUpRequest({ email, password }));
    return this.signUp$;
  }
  
  // ************************************************************
  // Internal Methods
  // ************************************************************
  
  protected createUserWithEmailAndPassword({email, password}): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  
}