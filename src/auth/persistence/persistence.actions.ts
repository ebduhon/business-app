import { Action } from '@ngrx/store';

export const LOAD_PERSISTENCE_REQUEST ='[Persistence] Load persistence request';
export const LOAD_PERSISTENCE_SUCCESS ='[Persistence] Load persistence success';
export const LOAD_PERSISTENCE_FAILURE ='[Persistence] Load persistence failure';
export const LOAD_PERSISTENCE_ERROR ='[Persistence] Load persistence error';
export const LOAD_PERSISTENCE_COMPLETE ='[Persistence] Load persistence complete';

export class LoadPersistenceRequest implements Action {
  readonly type = LOAD_PERSISTENCE_REQUEST;
  constructor(public payload?: any) {}
}

export class LoadPersistenceSuccess implements Action {
  readonly type = LOAD_PERSISTENCE_SUCCESS;
  constructor(public payload?: any) {}
}

export class LoadPersistenceFailure implements Action {
  readonly type = LOAD_PERSISTENCE_FAILURE;
  constructor(public payload?: any) {}
}

export class LoadPersistenceError implements Action {
  readonly type = LOAD_PERSISTENCE_ERROR;
  constructor(public payload?: any) {}
}

export class LoadPersistenceComplete implements Action {
  readonly type = LOAD_PERSISTENCE_COMPLETE;
  constructor(public payload?: any) {}
}

export type All
  = LoadPersistenceRequest
  | LoadPersistenceSuccess
  | LoadPersistenceFailure
  | LoadPersistenceError
  | LoadPersistenceComplete;