
import { Action } from '@ngrx/store';

//TODO: related to framework user-interface configuration options
export const CONFIGURE_USER_PRESENCE = '[User Presence] Configure user presence';
export const SHOW_USER_PRESENCE = '[User Presence] Show user presence';
export const HIDE_USER_PRESENCE = '[User Presence] Hide user presence';

export const ONLINE = '[User Presence] Online';
export const AWAY = '[User Presence] Away';
export const OFFLINE = '[User Presence] Offline';

export const ESTABLISH_USER_PRESENCE = '[User Presence] Establish user presence';

export const LOAD_USER_PRESENCE_REQUEST = '[User Presence] Load user presence request';
export const LOAD_USER_PRESENCE_SUCCESS = '[User Presence] Load user presence success';
export const LOAD_USER_PRESENCE_FAILURE = '[User Presence] Load user presence failure';
export const LOAD_USER_PRESENCE_ERROR = '[User Presence] Load user presence error';
export const LOAD_USER_PRESENCE_COMPLETE = '[User Presence] Load user presence complete';

export const UPDATE_USER_PRESENCE_REQUEST = '[User Presence] Update user presence request';
export const UPDATE_USER_PRESENCE_SUCCESS = '[User Presence] Update user presence success';
export const UPDATE_USER_PRESENCE_FAILURE = '[User Presence] Update user presence failure';
export const UPDATE_USER_PRESENCE_ERROR = '[User Presence] Update user presence error';
export const UPDATE_USER_PRESENCE_COMPLETE = '[User Presence] Update user presence complete';

export const OPEN_CONNECTION = '[User Presence] Open connection';
export const OPEN_CONNECTION_REQUEST = '[User Presence] Open connection request';
export const OPEN_CONNECTION_SUCCESS = '[User Presence] Open connection success';
export const OPEN_CONNECTION_FAILURE = '[User Presence] Open connection failure';
export const OPEN_CONNECTION_ERROR = '[User Presence] Open connection error';
export const OPEN_CONNECTION_COMPLETE = '[User Presence] Open connection complete';

export const CLOSE_CONNECTION = '[User Presence] Close connection';
export const CLOSE_CONNECTION_REQUEST = '[User Presence] Close connection request';
export const CLOSE_CONNECTION_SUCCESS = '[User Presence] Close connection success';
export const CLOSE_CONNECTION_FAILURE = '[User Presence] Close connection failure';
export const CLOSE_CONNECTION_ERROR = '[User Presence] Close connection error';
export const CLOSE_CONNECTION_COMPLETE = '[User Presence] Close connection complete';

export class ConfigureUserPresence implements Action {
  readonly type = CONFIGURE_USER_PRESENCE;
  constructor(public payload?: any) {}
}

export class ShowUserPresence implements Action {
  readonly type = SHOW_USER_PRESENCE;
  constructor(public payload?: any) {}
}

export class HideUserPresence implements Action {
  readonly type = HIDE_USER_PRESENCE;
  constructor(public payload?: any) {}
}

export class EstablishUserPresence implements Action {
  readonly type = ESTABLISH_USER_PRESENCE;
  constructor(public payload?: any) {}
}

export class LoadUserPresenceRequest implements Action {
  readonly type = LOAD_USER_PRESENCE_REQUEST;
  constructor(public payload?: any) {}
}

export class LoadUserPresenceSuccess implements Action {
  readonly type = LOAD_USER_PRESENCE_SUCCESS;
  constructor(public payload?: any) {}
}

export class LoadUserPresenceFailure implements Action {
  readonly type = LOAD_USER_PRESENCE_FAILURE;
  constructor(public payload?: any) {}
}

export class LoadUserPresenceError implements Action {
  readonly type = LOAD_USER_PRESENCE_ERROR;
  constructor(public payload?: any) {}
}

export class LoadUserPresenceComplete implements Action {
  readonly type = LOAD_USER_PRESENCE_COMPLETE;
  constructor(public payload?: any) {}
}

export class UpdateUserPresenceRequest implements Action {
  readonly type = UPDATE_USER_PRESENCE_REQUEST;
  constructor(public payload?: any) {}
}

export class UpdateUserPresenceSuccess implements Action {
  readonly type = UPDATE_USER_PRESENCE_SUCCESS;
  constructor(public payload?: any) {}
}

export class UpdateUserPresenceFailure implements Action {
  readonly type = UPDATE_USER_PRESENCE_FAILURE;
  constructor(public payload?: any) {}
}

export class UpdateUserPresenceError implements Action {
  readonly type = UPDATE_USER_PRESENCE_ERROR;
  constructor(public payload?: any) {}
}

export class UpdateUserPresenceComplete implements Action {
  readonly type = UPDATE_USER_PRESENCE_COMPLETE;
  constructor(public payload?: any) {}
}

export class OpenConnection implements Action {
  readonly type = OPEN_CONNECTION;
  constructor(public payload?: any) {}
}

export class OpenConnectionRequest implements Action {
  readonly type = OPEN_CONNECTION_REQUEST;
  constructor(public payload?: any) {}
}

export class OpenConnectionSuccess implements Action {
  readonly type = OPEN_CONNECTION_SUCCESS;
  constructor(public payload?: any) {}
}

export class OpenConnectionFailure implements Action {
  readonly type = OPEN_CONNECTION_FAILURE;
  constructor(public payload?: any) {}
}

export class OpenConnectionError implements Action {
  readonly type = OPEN_CONNECTION_ERROR;
  constructor(public payload?: any) {}
}

export class OpenConnectionComplete implements Action {
  readonly type = OPEN_CONNECTION_COMPLETE;
  constructor(public payload?: any) {}
}

export class CloseConnection implements Action {
  readonly type = CLOSE_CONNECTION;
  constructor(public payload?: any) {}
}

export class CloseConnectionRequest implements Action {
  readonly type = CLOSE_CONNECTION_REQUEST;
  constructor(public payload?: any) {}
}

export class CloseConnectionSuccess implements Action {
  readonly type = CLOSE_CONNECTION_SUCCESS;
  constructor(public payload?: any) {}
}

export class CloseConnectionFailure implements Action {
  readonly type = CLOSE_CONNECTION_FAILURE;
  constructor(public payload?: any) {}
}

export class CloseConnectionError implements Action {
  readonly type = CLOSE_CONNECTION_ERROR;
  constructor(public payload?: any) {}
}

export class CloseConnectionComplete implements Action {
  readonly type = CLOSE_CONNECTION_COMPLETE;
  constructor(public payload?: any) {}
}

export type All
  = ConfigureUserPresence
  | ShowUserPresence
  | HideUserPresence
  | EstablishUserPresence
  | LoadUserPresenceRequest
  | LoadUserPresenceSuccess
  | LoadUserPresenceFailure
  | LoadUserPresenceError
  | LoadUserPresenceComplete
  | UpdateUserPresenceRequest
  | UpdateUserPresenceSuccess
  | UpdateUserPresenceFailure
  | UpdateUserPresenceError
  | UpdateUserPresenceComplete
  | OpenConnection
  | OpenConnectionRequest
  | OpenConnectionSuccess
  | OpenConnectionFailure
  | OpenConnectionError
  | OpenConnectionComplete
  | CloseConnection
  | CloseConnectionRequest
  | CloseConnectionSuccess
  | CloseConnectionFailure
  | CloseConnectionError
  | CloseConnectionComplete;