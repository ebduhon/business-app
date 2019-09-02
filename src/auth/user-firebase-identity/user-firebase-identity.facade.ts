import { Injectable, Inject } from '@angular/core';
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

import { UserFirebaseIdentity } from './user-firebase-identity.model';
import * as UserFirebaseIdentityActions from './user-firebase-identity.actions';
type Action = UserFirebaseIdentityActions.All;

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUserFirebaseIdentityState = createSelector(
  selectAuthState,
  (state: AuthState) => state.userFirebaseIdentity
);

export const selectUserFirebaseIdentityUid = createSelector(
  selectAuthState,
  (state: AuthState) => state.userFirebaseIdentity.uid
);

export const selectUserFirebaseIdentityDisplayName = createSelector(
  selectAuthState,
  (state: AuthState) => state.userFirebaseIdentity.displayName
);

export const selectUserFirebaseIdentityPhotoURL = createSelector(
  selectAuthState,
  (state: AuthState) => state.userFirebaseIdentity.photoURL
);

export const selectUserFirebaseIdentityEmail = createSelector(
  selectAuthState,
  (state: AuthState) => state.userFirebaseIdentity.email
);

export const selectUserFirebaseIdentityEmailVerified = createSelector(
  selectAuthState,
  (state: AuthState) => state.userFirebaseIdentity.emailVerified
);

export const selectUserFirebaseIdentityPhoneNumber = createSelector(
  selectAuthState,
  (state: AuthState) => state.userFirebaseIdentity.phoneNumber
);

export const selectUserFirebaseIdentityRefreshToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.userFirebaseIdentity.refreshToken
);

export const selectUserFirebaseIdentityIsAnonymous = createSelector(
  selectAuthState,
  (state: AuthState) => state.userFirebaseIdentity.isAnonymous
);

import * as StatusActions from '../status/status.actions';

@Injectable()
export class UserFirebaseIdentityFacade {
  
  private userFirebaseIdentity: Observable<firebase.User>;
  private alive: boolean;
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  userFirebaseIdentity$ = this.store.select(selectUserFirebaseIdentityState);
  userFirebaseIdentityUid$ = this.store.select(selectUserFirebaseIdentityUid);
  userFirebaseIdentityDisplayName$ = this.store.select(selectUserFirebaseIdentityDisplayName);
  userFirebaseIdentityPhotoURL$ = this.store.select(selectUserFirebaseIdentityPhotoURL);
  userFirebaseIdentityEmail$ = this.store.select(selectUserFirebaseIdentityEmail);
  userFirebaseIdentityEmailVerified$ = this.store.select(selectUserFirebaseIdentityEmailVerified);
  userFirebaseIdentityPhoneNumber$ = this.store.select(selectUserFirebaseIdentityPhoneNumber);
  userFirebaseIdentityRefreshToken$ = this.store.select(selectUserFirebaseIdentityRefreshToken);
  userFirebaseIdentityIsAnonymous$ = this.store.select(selectUserFirebaseIdentityIsAnonymous);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  @Effect({ dispatch: false })
  loadUserFirebaseIdentityRequest$: Observable<any> = this.actions$.ofType(UserFirebaseIdentityActions.LOAD_USER_FIREBASE_IDENTITY_REQUEST)
    .map((action: UserFirebaseIdentityActions.LoadUserFirebaseIdentityRequest) => action.payload)
    .switchMap((payload) => this.afAuth.authState)
    .map((payload) => {
      if (payload) {
        const userFirebaseIdentity = new UserFirebaseIdentity(payload.uid, payload.displayName, payload.photoURL, payload.email, payload.emailVerified, payload.phoneNumber, payload.refreshToken, payload.isAnonymous);
        this.store.dispatch(new UserFirebaseIdentityActions.LoadUserFirebaseIdentitySuccess(userFirebaseIdentity));
      } else {
        this.store.dispatch(new UserFirebaseIdentityActions.LoadUserFirebaseIdentityFailure(payload));
      }
    });
    
  @Effect({ dispatch: false })
  loadUserFirebaseIdentitySuccess$: Observable<any> = this.actions$.ofType(UserFirebaseIdentityActions.LOAD_USER_FIREBASE_IDENTITY_SUCCESS)
    .map((action: UserFirebaseIdentityActions.LoadUserFirebaseIdentitySuccess) => action.payload)
    .do((payload) => {
      console.log('effect loadUserFirebaseIdentitySuccess$ payload: ', payload);
    })
    .map((payload) => {
      this.store.dispatch(new StatusActions.Authenticated({ isAuthenticated: true }));
    });
    
  @Effect({ dispatch: false })
  loadUserFirebaseIdentityFailure$: Observable<any> = this.actions$.ofType(UserFirebaseIdentityActions.LOAD_USER_FIREBASE_IDENTITY_FAILURE)
    .map((action: UserFirebaseIdentityActions.LoadUserFirebaseIdentityFailure) => action.payload)
    .do((payload) => {
      console.log('effect loadUserFirebaseIdentityFailure$ payload: ', payload);
    })
    .map((payload) => {
      this.store.dispatch(new StatusActions.NotAuthenticated({ isAuthenticated: false }));
    });
    
  @Effect({ dispatch: false })
  updateUserFirebaseIdentityProfileRequest$: Observable<any> = this.actions$.ofType(UserFirebaseIdentityActions.UPDATE_USER_FIREBASE_IDENTITY_PROFILE_REQUEST)
    .map((action: UserFirebaseIdentityActions.UpdateUserFirebaseIdentityProfileRequest) => action.payload)
    .switchMap((payload) => {
      return Observable.fromPromise(this._updateProfile(payload));
    })
    .mergeMap((results) => {
      return [
        new UserFirebaseIdentityActions.UpdateUserFirebaseIdentityProfileSuccess()
      ];
    })
    .catch((err) => {
      return Observable.of(new UserFirebaseIdentityActions.UpdateUserFirebaseIdentityProfileFailure({ error: err }));
    });
    
  @Effect({ dispatch: false })
  updateUserFirebaseIdentityProfileSuccess$: Observable<any> = this.actions$.ofType(UserFirebaseIdentityActions.UPDATE_USER_FIREBASE_IDENTITY_PROFILE_SUCCESS)
    .map((action: UserFirebaseIdentityActions.UpdateUserFirebaseIdentityProfileSuccess) => action.payload)
    .do((payload) => {
      console.log('effect updateUserFirebaseIdentityProfileSuccess$ payload: ', payload);
      //TODO: this.router.navigate "return to user account summary"
    })
    .map((payload) => {
      return new UserFirebaseIdentityActions.UpdateUserFirebaseIdentityProfileComplete(payload);
    });
  
  @Effect({ dispatch: false })
  init$: Observable<any> = defer(() => {
    //console.log('user-firebase-identity.facade init$ effect');
    this._loadUserFirebaseIdentity();
    this.store.dispatch(new UserFirebaseIdentityActions.LoadUserFirebaseIdentityRequest());
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
  ) {}
  
  updateUserFirebaseIdentityProfile({ displayName, photoURL }) {
    console.log('effect updateUserFirebaseIdentityProfile: ' + 'displayName: ' + displayName + ' photoURL: ' + photoURL);
    this.store.dispatch(new UserFirebaseIdentityActions.UpdateUserFirebaseIdentityProfileRequest({ displayName, photoURL }));
    return this.userFirebaseIdentity$;
  }
  
  loadUserFirebaseIdentity() {
    return this.userFirebaseIdentity$;
  }
  
  // ************************************************************
  // Internal Methods
  // ************************************************************
  
  protected _loadUserFirebaseIdentity() {
    this.userFirebaseIdentity = this.afAuth.authState;
    this.userFirebaseIdentity
      .do((userFirebaseIdentity) => {
        if (userFirebaseIdentity) {
          this.alive = true;
        } else {
          this.alive = false;
        }
        console.log('alive: ', this.alive);
      })
      .subscribe();
  }
  
  protected _updateProfile({ displayName, photoURL }): Promise<any> {
    return firebase.auth().currentUser.updateProfile({ displayName, photoURL });
  }
  
  
}