import { Action } from '@ngrx/store';

export const LOAD_UI_CONFIG_REQUEST = '[UiConfig] Load ui-config request';
export const LOAD_UI_CONFIG_SUCCESS = '[UiConfig] Load ui-config success';
export const LOAD_UI_CONFIG_FAILURE = '[UiConfig] Load ui-config failure';
export const LOAD_UI_CONFIG_ERROR = '[UiConfig] Load ui-config error';
export const LOAD_UI_CONFIG_COMPLETE = '[UiConfig] Load ui-config complete';

//TODO: LIST
//TODO: GET
//TODO: CREATE
//TODO: UPDATE
//TODO: DELETE

export class LoadUiConfigRequest implements Action {
  readonly type = LOAD_UI_CONFIG_REQUEST;
  constructor(public payload?: any) {}
}

export class LoadUiConfigSuccess implements Action {
  readonly type = LOAD_UI_CONFIG_SUCCESS;
  constructor(public payload?: any) {}
}

export class LoadUiConfigFailure implements Action {
  readonly type = LOAD_UI_CONFIG_FAILURE;
  constructor(public payload?: any) {}
}

export class LoadUiConfigError implements Action {
  readonly type = LOAD_UI_CONFIG_ERROR;
  constructor(public payload?: any) {}
}

export class LoadUiConfigComplete implements Action {
  readonly type = LOAD_UI_CONFIG_COMPLETE;
  constructor(public payload?: any) {}
}

export type All
  = LoadUiConfigRequest
  | LoadUiConfigSuccess
  | LoadUiConfigFailure
  | LoadUiConfigError
  | LoadUiConfigComplete;