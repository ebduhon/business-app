
import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

import { AuthState } from './auth.state';

import * as fromConnectivity from './connectivity/connectivity.reducer';
import * as fromPersistence from './persistence/persistence.reducer';
import * as fromSignIn from './sign-in/sign-in.reducer';
import * as fromSignOut from './sign-out/sign-out.reducer';
import * as fromSignUp from './sign-up/sign-up.reducer';
import * as fromStatus from './status/status.reducer';
import * as fromUserFirebaseIdentity from './user-firebase-identity/user-firebase-identity.reducer';
import * as fromUserPresence from './user-presence/user-presence.reducer';

export const AUTH_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AuthState>>('Auth reducers');

export function getAuthReducers(): ActionReducerMap<AuthState> {
  // map of reducers
  return {
    connectivity: fromConnectivity.connectivityReducer,
    persistence: fromPersistence.persistenceReducer,
    signIn: fromSignIn.signInReducer,
    signOut: fromSignOut.signOutReducer,
    signUp: fromSignUp.signUpReducer,
    status: fromStatus.statusReducer,
    userFirebaseIdentity: fromUserFirebaseIdentity.userFirebaseIdentityReducer,
    userPresence: fromUserPresence.userPresenceReducer
  }
}

export let getAuthReducersProvider = { provide: AUTH_REDUCER_TOKEN, useFactory: getAuthReducers };