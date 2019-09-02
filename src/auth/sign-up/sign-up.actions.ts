import { Action } from '@ngrx/store';

// Commands

// Documents

// Events

//TODO: refactor
export const SIGN_UP_REQUEST = '[SignUp] Sign Up request';
export const SIGN_UP_SUCCESS = '[SignUp] Sign Up success';
export const SIGN_UP_FAILURE = '[SignUp] Sign Up failure';
export const SIGN_UP_COMPLETE = '[SignUp] Sign Up complete';
export const SIGN_UP_REDIRECT = '[SignUp] Sign Up redirect';

//TODO: refactor
export class SignUpRequest implements Action {
  readonly type = SIGN_UP_REQUEST;
  constructor(public payload?: any) {}
}

//TODO: refactor
export class SignUpSuccess implements Action {
  readonly type = SIGN_UP_SUCCESS;
  constructor(public payload?: any) {}
}

//TODO: refactor
export class SignUpFailure implements Action {
  readonly type = SIGN_UP_FAILURE;
  constructor(public payload?: any) {}
}

//TODO: refactor
export class SignUpComplete implements Action {
  readonly type = SIGN_UP_COMPLETE;
  constructor(public payload?: any) {}
}

//TODO: refactor
export class SignUpRedirect implements Action {
  readonly type = SIGN_UP_REDIRECT;
  constructor(public payload?: any) {}
}

export type All
  = SignUpRequest
  | SignUpSuccess
  | SignUpFailure
  | SignUpComplete
  | SignUpRedirect;