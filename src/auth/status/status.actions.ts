import { Action } from '@ngrx/store';

// Commands
export const INITIALIZE_STATUS_REQUEST = '[Status] Initialize status request';
export const INITIALIZE_STATUS_SUCCESS = '[Status] Initialize status success';
export const INITIALIZE_STATUS_FAILURE = '[Status] Initialize status failure';
export const INITIALIZE_STATUS_COMPLETE = '[Status] Initialize status complete';

//TODO: refactor to distinguish INITIALIZE_AUTH_STATE from INITIALIZE_STATUS_REQUEST

// Documents

// Events

//TODO: refactor
export const AUTHENTICATED = '[Status] Authenticated';
export const NOT_AUTHENTICATED = '[Status] Not authenticated';

//TODO: refactor
export const AUTHENTICATION_REQUEST = '[Status] Authentication request';
export const AUTHENTICATION_SUCCESS = '[Status] Authentication success';
export const AUTHENTICATION_FAILURE = '[Status] Authentication failure';
export const AUTHENTICATION_COMPLETE = '[Status] Authentication complete';
// export const GET_STATUS_REQUEST = '[Status] Get status request';
// export const GET_STATUS_SUCCESS = '[Status] Get status success';
// export const GET_STATUS_FAILURE = '[Status] Get status failure';
// export const GET_STATUS_COMPLETE = '[Status] Get status complete';

export class InitializeStatusRequest implements Action {
  readonly type = INITIALIZE_STATUS_REQUEST;
  constructor(public payload?: any) {}
}

export class InitializeStatusSuccess implements Action {
  readonly type = INITIALIZE_STATUS_SUCCESS;
  constructor(public payload?: any) {}
}

export class InitializeStatusFailure implements Action {
  readonly type = INITIALIZE_STATUS_FAILURE;
  constructor(public payload?: any) {}
}

export class InitializeStatusComplete implements Action {
  readonly type = INITIALIZE_STATUS_COMPLETE;
  constructor(public payload?: any) {}
}

//TODO: refactor
export class Authenticated implements Action {
  readonly type = AUTHENTICATED;
  constructor(public payload?: any) {}
}

//TODO: refactor
export class NotAuthenticated implements Action {
  readonly type = NOT_AUTHENTICATED;
  constructor(public payload?: any) {}
}

//TODO: refactor
export class AuthenticationRequest implements Action {
  readonly type = AUTHENTICATION_REQUEST;
  constructor(public payload?: any) {}
}

//TODO: refactor
export class AuthenticationSuccess implements Action {
  readonly type = AUTHENTICATION_SUCCESS;
  constructor(public payload?: any) {}
}

//TODO: refactor
export class AuthenticationFailure implements Action {
  readonly type = AUTHENTICATION_FAILURE;
  constructor(public payload?: any) {}
}

//TODO: refactor
export class AuthenticationComplete implements Action {
  readonly type = AUTHENTICATION_COMPLETE;
  constructor(public payload?: any) {}
}


export type All
  = InitializeStatusRequest
  | InitializeStatusSuccess
  | InitializeStatusFailure
  | InitializeStatusComplete
  | Authenticated
  | NotAuthenticated
  | AuthenticationRequest
  | AuthenticationSuccess
  | AuthenticationFailure
  | AuthenticationComplete;