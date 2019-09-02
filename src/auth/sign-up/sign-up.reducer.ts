import { AuthState } from '../auth.state';

import * as SignUpActions from './sign-up.actions';
import { ISignUp, SignUp } from './sign-up.model';
export type Action = SignUpActions.All;

export interface SignUpState extends ISignUp {
  loading?: boolean;
  error?: string;
  errorCode?: string;
  errorMessage?: string;
}

export function signUpReducer(state: SignUpState, action: Action): SignUpState {
  switch (action.type) {
    case SignUpActions.SIGN_UP_REQUEST:
      return { ...state, loading: true };
    
    case SignUpActions.SIGN_UP_SUCCESS:
      return { ...state, ...action.payload, loading: false };
    
    case SignUpActions.SIGN_UP_FAILURE:
      return { ...state, ...action.payload, loading: false };
    
    case SignUpActions.SIGN_UP_COMPLETE:
      return { ...state, ...action.payload };
    
    case SignUpActions.SIGN_UP_REDIRECT:
      return { ...state, ...action.payload, loading: false };
    
    default:
      return state;
  }
}