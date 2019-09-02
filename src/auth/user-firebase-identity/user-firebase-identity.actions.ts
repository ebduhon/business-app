import { Action } from '@ngrx/store';

// These actions are related to native firebase user data

export const LOAD_USER_FIREBASE_IDENTITY_REQUEST = '[User Firebase Identity] Load user firebase identity request';
export const LOAD_USER_FIREBASE_IDENTITY_SUCCESS = '[User Firebase Identity] Load user firebase identity success';
export const LOAD_USER_FIREBASE_IDENTITY_FAILURE = '[User Firebase Identity] Load user firebase identity failure';
export const LOAD_USER_FIREBASE_IDENTITY_ERROR = '[User Firebase Identity] Load user firebase identity error';
export const LOAD_USER_FIREBASE_IDENTITY_COMPLETE = '[User Firebase Identity] Load user firebase identity complete';

export const GET_USER_FIREBASE_IDENTITY_REQUEST = '[User Firebase Identity] Get user firebase identity request';
export const GET_USER_FIREBASE_IDENTITY_SUCCESS = '[User Firebase Identity] Get user firebase identity success';
export const GET_USER_FIREBASE_IDENTITY_FAILURE = '[User Firebase Identity] Get user firebase identity failure';
export const GET_USER_FIREBASE_IDENTITY_ERROR = '[User Firebase Identity] Get user firebase identity error';
export const GET_USER_FIREBASE_IDENTITY_COMPLETE = '[User Firebase Identity] Get user firebase identity complete';

export const UPDATE_USER_FIREBASE_IDENTITY_PROFILE_REQUEST = '[User Firebase Identity] Update user firebase identity profile request';
export const UPDATE_USER_FIREBASE_IDENTITY_PROFILE_SUCCESS = '[User Firebase Identity] Update user firebase identity profile success';
export const UPDATE_USER_FIREBASE_IDENTITY_PROFILE_FAILURE = '[User Firebase Identity] Update user firebase identity profile failure';
export const UPDATE_USER_FIREBASE_IDENTITY_PROFILE_ERROR = '[User Firebase Identity] Update user firebase identity profile error';
export const UPDATE_USER_FIREBASE_IDENTITY_PROFILE_COMPLETE = '[User Firebase Identity] Update user firebase identity profile complete';

export class LoadUserFirebaseIdentityRequest implements Action {
  readonly type = LOAD_USER_FIREBASE_IDENTITY_REQUEST;
  constructor(public payload?: any) {}
}

export class LoadUserFirebaseIdentitySuccess implements Action {
  readonly type = LOAD_USER_FIREBASE_IDENTITY_SUCCESS;
  constructor(public payload?: any) {}
}

export class LoadUserFirebaseIdentityFailure implements Action {
  readonly type = LOAD_USER_FIREBASE_IDENTITY_FAILURE;
  constructor(public payload?: any) {}
}

export class LoadUserFirebaseIdentityError implements Action {
  readonly type = LOAD_USER_FIREBASE_IDENTITY_ERROR;
  constructor(public payload?: any) {}
}

export class LoadUserFirebaseIdentityComplete implements Action {
  readonly type = LOAD_USER_FIREBASE_IDENTITY_COMPLETE;
  constructor(public payload?: any) {}
}

export class GetUserFirebaseIdentityRequest implements Action {
  readonly type = GET_USER_FIREBASE_IDENTITY_REQUEST;
  constructor(public payload?: any) {}
}

export class GetUserFirebaseIdentitySuccess implements Action {
  readonly type = GET_USER_FIREBASE_IDENTITY_SUCCESS;
  constructor(public payload?: any) {}
}

export class GetUserFirebaseIdentityFailure implements Action {
  readonly type = GET_USER_FIREBASE_IDENTITY_FAILURE;
  constructor(public payload?: any) {}
}

export class GetUserFirebaseIdentityError implements Action {
  readonly type = GET_USER_FIREBASE_IDENTITY_ERROR;
  constructor(public payload?: any) {}
}

export class GetUserFirebaseIdentityComplete implements Action {
  readonly type = GET_USER_FIREBASE_IDENTITY_COMPLETE;
  constructor(public payload?: any) {}
}

export class UpdateUserFirebaseIdentityProfileRequest implements Action {
  readonly type = UPDATE_USER_FIREBASE_IDENTITY_PROFILE_REQUEST;
  constructor(public payload?: any) {}
}

export class UpdateUserFirebaseIdentityProfileSuccess implements Action {
  readonly type = UPDATE_USER_FIREBASE_IDENTITY_PROFILE_SUCCESS;
  constructor(public payload?: any) {}
}

export class UpdateUserFirebaseIdentityProfileFailure implements Action {
  readonly type = UPDATE_USER_FIREBASE_IDENTITY_PROFILE_FAILURE;
  constructor(public payload?: any) {}
}

export class UpdateUserFirebaseIdentityProfileError implements Action {
  readonly type = UPDATE_USER_FIREBASE_IDENTITY_PROFILE_ERROR;
  constructor(public payload?: any) {}
}

export class UpdateUserFirebaseIdentityProfileComplete implements Action {
  readonly type = UPDATE_USER_FIREBASE_IDENTITY_PROFILE_COMPLETE;
  constructor(public payload?: any) {}
}

export type All
  = LoadUserFirebaseIdentityRequest
  | LoadUserFirebaseIdentitySuccess
  | LoadUserFirebaseIdentityFailure
  | LoadUserFirebaseIdentityError
  | LoadUserFirebaseIdentityComplete
  | GetUserFirebaseIdentityRequest
  | GetUserFirebaseIdentitySuccess
  | GetUserFirebaseIdentityFailure
  | GetUserFirebaseIdentityError
  | GetUserFirebaseIdentityComplete
  | UpdateUserFirebaseIdentityProfileRequest
  | UpdateUserFirebaseIdentityProfileSuccess
  | UpdateUserFirebaseIdentityProfileFailure
  | UpdateUserFirebaseIdentityProfileError
  | UpdateUserFirebaseIdentityProfileComplete;