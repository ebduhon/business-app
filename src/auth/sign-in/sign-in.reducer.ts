import { AuthState } from '../auth.state';

import * as SignInActions from './sign-in.actions';
import { ISignIn, SignIn } from './sign-in.model';
export type Action = SignInActions.All;

// const defaultSignInState = new SignIn("");

export interface SignInState extends ISignIn {
  loading?: boolean;
  error?: string;
  errorCode?: string;
  errorMessage?: string;
}

export function signInReducer(state: SignInState, action: Action): SignInState {
  switch (action.type) {
    case SignInActions.SIGN_IN_REQUEST:
      return { ...state, loading: true };
      
    case SignInActions.SIGN_IN_SUCCESS:
      return { ...state, ...action.payload, loading: false };
    
    case SignInActions.SIGN_IN_FAILURE:
      return { ...state, ...action.payload, loading: false };
      
    case SignInActions.SIGN_IN_ERROR:
      return { ...state, ...action.payload };
      
    case SignInActions.SIGN_IN_COMPLETE:
      return { ...state, ...action.payload };
    
    case SignInActions.SIGN_IN_REDIRECT:
      return { ...state, ...action.payload, loading: true };
    
    default:
      return state;
  }
}