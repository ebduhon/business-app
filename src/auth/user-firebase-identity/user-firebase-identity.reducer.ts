import { AuthState } from '../auth.state';

import * as UserFirebaseIdentityActions from './user-firebase-identity.actions';
import { IUserFirebaseIdentity, UserFirebaseIdentity } from './user-firebase-identity.model';
export type Action = UserFirebaseIdentityActions.All;

const defaultUserFirebaseIdentityState = new UserFirebaseIdentity('', '', '', '', false, '', '', false);

export interface UserFirebaseIdentityState extends IUserFirebaseIdentity {
  loading?: boolean;
  error?: string;
  errorCode?: string;
  errorMessage?: string;
}

export function userFirebaseIdentityReducer(state: UserFirebaseIdentityState = defaultUserFirebaseIdentityState, action: Action): UserFirebaseIdentityState {
  switch (action.type) {
    
    case UserFirebaseIdentityActions.LOAD_USER_FIREBASE_IDENTITY_REQUEST:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.LOAD_USER_FIREBASE_IDENTITY_SUCCESS:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.LOAD_USER_FIREBASE_IDENTITY_FAILURE:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.LOAD_USER_FIREBASE_IDENTITY_ERROR:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.LOAD_USER_FIREBASE_IDENTITY_COMPLETE:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.GET_USER_FIREBASE_IDENTITY_REQUEST:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.GET_USER_FIREBASE_IDENTITY_SUCCESS:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.GET_USER_FIREBASE_IDENTITY_FAILURE:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.GET_USER_FIREBASE_IDENTITY_ERROR:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.GET_USER_FIREBASE_IDENTITY_COMPLETE:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.UPDATE_USER_FIREBASE_IDENTITY_PROFILE_REQUEST:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.UPDATE_USER_FIREBASE_IDENTITY_PROFILE_SUCCESS:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.UPDATE_USER_FIREBASE_IDENTITY_PROFILE_FAILURE:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.UPDATE_USER_FIREBASE_IDENTITY_PROFILE_ERROR:
      return { ...state, ...action.payload };
    
    case UserFirebaseIdentityActions.UPDATE_USER_FIREBASE_IDENTITY_PROFILE_COMPLETE:
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}