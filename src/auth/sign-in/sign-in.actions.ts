import { Action } from '@ngrx/store';

export const SIGN_IN_REQUEST = '[SignIn] Sign In request';
export const SIGN_IN_SUCCESS = '[SignIn] Sign In success';
export const SIGN_IN_FAILURE = '[SignIn] Sign In failure';
export const SIGN_IN_ERROR = '[SignIn] Sign In error';
export const SIGN_IN_COMPLETE = '[SignIn] Sign In complete';
export const SIGN_IN_REDIRECT = '[SignIn] Sign In redirect';

export class SignInRequest implements Action {
  readonly type = SIGN_IN_REQUEST;
  constructor(public payload?: any) {}
}

export class SignInSuccess implements Action {
  readonly type = SIGN_IN_SUCCESS;
  constructor(public payload?: any) {}
}

export class SignInFailure implements Action {
  readonly type = SIGN_IN_FAILURE;
  constructor(public payload?: any) {}
}

export class SignInError implements Action {
  readonly type = SIGN_IN_ERROR;
  constructor(public payload?: any) {}
}

export class SignInComplete implements Action {
  readonly type = SIGN_IN_COMPLETE;
  constructor(public payload?: any) {}
}

export class SignInRedirect implements Action {
  readonly type = SIGN_IN_REDIRECT;
  constructor(public payload?: any) {}
}

export type All
  = SignInRequest
  | SignInSuccess
  | SignInFailure
  | SignInError
  | SignInComplete
  | SignInRedirect;