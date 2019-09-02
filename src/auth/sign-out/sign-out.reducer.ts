import { AuthState } from '../auth.state';

import * as SignOutActions from './sign-out.actions';
import { ISignOut, SignOut } from './sign-out.model';

export type Action = SignOutActions.All;

// const defaultSignOutState = new SignOut("");

export interface SignOutState extends ISignOut {
  loading?: boolean;
  error?: string;
  errorCode?: string;
  errorMessage?: string;
}

export function signOutReducer(state: SignOutState, action: Action): SignOutState {
  switch (action.type) {
    case SignOutActions.SIGN_OUT_REQUEST:
      return { ...state, loading: true };
    
    case SignOutActions.SIGN_OUT_SUCCESS:
      return { ...state, ...action.payload, loading: false };
    
    case SignOutActions.SIGN_OUT_FAILURE:
      return { ...state, ...action.payload, loading: false };
    
    case SignOutActions.SIGN_OUT_COMPLETE:
      return { ...state, ...action.payload };
    
    case SignOutActions.SIGN_OUT_REDIRECT:
      return { ...state, ...action.payload, loading: true };
    
    default:
      return state;
  }
}