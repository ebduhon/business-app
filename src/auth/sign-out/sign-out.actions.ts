import { Action } from '@ngrx/store';

export const SIGN_OUT_REQUEST = '[SignOut] Sign Out request';
export const SIGN_OUT_SUCCESS = '[SignOut] Sign Out success';
export const SIGN_OUT_FAILURE = '[SignOut] Sign Out failure';
export const SIGN_OUT_COMPLETE = '[SignOut] Sign Out complete';
export const SIGN_OUT_REDIRECT = '[SignOut] Sign Out redirect';

export class SignOutRequest implements Action {
  readonly type = SIGN_OUT_REQUEST;
  constructor(public payload?: any) {}
}

export class SignOutSuccess implements Action {
  readonly type = SIGN_OUT_SUCCESS;
  constructor(public payload?: any) {}
}

export class SignOutFailure implements Action {
  readonly type = SIGN_OUT_FAILURE;
  constructor(public payload?: any) {}
}

export class SignOutComplete implements Action {
  readonly type = SIGN_OUT_COMPLETE;
  constructor(public payload?: any) {}
}

export class SignOutRedirect implements Action {
  readonly type = SIGN_OUT_REDIRECT;
  constructor(public payload?: any) {}
}

export type All
  = SignOutRequest
  | SignOutSuccess
  | SignOutFailure
  | SignOutComplete
  | SignOutRedirect;