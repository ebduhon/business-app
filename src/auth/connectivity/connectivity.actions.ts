import { Action } from '@ngrx/store';

//TODO: related to framework user-interface configuration options
export const CONFIGURE_CONNECTIVITY = '[Connectivity] Configure connectivity';
export const SHOW_CONNECTIVITY = '[Connectivity] Show connectivity';
export const HIDE_CONNECTIVITY = '[Connectivity] Hide connectivity';

export const INITIALIZE_CONNECTION = '[Connectivity] Initialize connection';
export const ESTABLISH_CONNECTION = '[Connectivity] Establish connection';
export const RECONNECTING = '[Connectivity] Reconnecting'
export const CONNECTED = '[Connectivity] Connected';
export const DISCONNECTED = '[Connectivity] Disconnected';
export const CONNECTIVITY_ERROR = '[Connectivity] Connectivity error';
export const CONNECTION_SESSION_STARTED = '[Connectivity] Connection session started';
export const CONNECTION_SESSION_ENDED = '[Connectivity] Connection session ended';

export const LOAD_CONNECTION_SESSIONS_REQUEST = '[Connectivity] Load connection sessions request';
export const LOAD_CONNECTION_SESSIONS_SUCCESS = '[Connectivity] Load connection sessions success';
export const LOAD_CONNECTION_SESSIONS_FAILURE = '[Connectivity] Load connection sessions failure';
export const LOAD_CONNECTION_SESSIONS_ERROR = '[Connectivity] Load connection sessions error';
export const LOAD_CONNECTION_SESSIONS_COMPLETE = '[Connectivity] Load connection sessions complete';

export const GET_CONNECTION_SESSION_REQUEST = '[Connectivity] Get connection session request';
export const GET_CONNECTION_SESSION_SUCCESS = '[Connectivity] Get connection session succss';
export const GET_CONNECTION_SESSION_FAILURE = '[Connectivity] Get connection session failure';
export const GET_CONNECTION_SESSION_ERROR = '[Connectivity] Get connection session error';
export const GET_CONNECTION_SESSION_COMPLETE = '[Connectivity] Get connection session complete';

export const UPDATE_CONNECTION_SESSION_REQUEST = '[Connectivity] Update connection session request';
export const UPDATE_CONNECTION_SESSION_SUCCESS = '[Connectivity] Update connection session success';
export const UPDATE_CONNECTION_SESSION_FAILURE = '[Connectivity] Update connection session failure';
export const UPDATE_CONNECTION_SESSION_ERROR = '[Connectivity] Update connection session error';
export const UPDATE_CONNECTION_SESSION_COMPLETE = '[Connectivity] Update connection session complete';

export const CLOSE_CONNECTION_SESSION_REQUEST = '[Connectivity] Close connection session request';
export const CLOSE_CONNECTION_SESSION_SUCCESS = '[Connectivity] Close connection session success';
export const CLOSE_CONNECTION_SESSION_FAILURE = '[Connectivity] Close connection session failure';
export const CLOSE_CONNECTION_SESSION_ERROR = '[Connectivity] Close connection session error';
export const CLOSE_CONNECTION_SESSION_COMPLETE = '[Connectivity] Close connection session complete';

//TODO: SAVE_CONNECTION_SESSION
//TODO: RESTORE_CONNECTION_SESSION

export class ConfigureConnectivity implements Action {
  readonly type = CONFIGURE_CONNECTIVITY;
  constructor(public payload?: any) {}
}

export class ShowConnectivity implements Action {
  readonly type = SHOW_CONNECTIVITY;
  constructor(public payload?: any) {}
}

export class HideConnectivity implements Action {
  readonly type = HIDE_CONNECTIVITY;
  constructor(public payload?: any) {}
}

export class InitializeConnection implements Action {
  readonly type = INITIALIZE_CONNECTION;
  constructor(public payload?: any) {}
}

export class EstablishConnection implements Action {
  readonly type = ESTABLISH_CONNECTION;
  constructor(public payload?: any) {}
}

export class Reconnecting implements Action {
  readonly type = RECONNECTING;
  constructor(public payload?: any) {}
}

export class Connected implements Action {
  readonly type = CONNECTED;
  constructor(public payload?: any) {}
}

export class Disconnected implements Action {
  readonly type = DISCONNECTED;
  constructor(public payload?: any) {}
}

export class ConnectivityError implements Action {
  readonly type = CONNECTIVITY_ERROR;
  constructor(public payload?: any) {}
}

export class ConnectionSessionEnded implements Action {
  readonly type = CONNECTION_SESSION_ENDED;
  constructor(public payload?: any) {}
}

export class LoadConnectionSessionsRequest implements Action {
  readonly type = LOAD_CONNECTION_SESSIONS_REQUEST;
  constructor(public payload?: any) {}
}

export class LoadConnectionSessionsSuccess implements Action {
  readonly type = LOAD_CONNECTION_SESSIONS_SUCCESS;
  constructor(public payload?: any) {}
}

export class LoadConnectionSessionsFailure implements Action {
  readonly type = LOAD_CONNECTION_SESSIONS_FAILURE;
  constructor(public payload?: any) {}
}

export class LoadConnectionSessionsError implements Action {
  readonly type = LOAD_CONNECTION_SESSIONS_ERROR;
  constructor(public payload?: any) {}
}

export class LoadConnectionSessionsComplete implements Action {
  readonly type = LOAD_CONNECTION_SESSIONS_COMPLETE;
  constructor(public payload?: any) {}
}

export class GetConnectionSessionRequest implements Action {
  readonly type = GET_CONNECTION_SESSION_REQUEST;
  constructor(public payload?: any) {}
}

export class GetConnectionSessionSuccess implements Action {
  readonly type = GET_CONNECTION_SESSION_SUCCESS;
  constructor(public payload?: any) {}
}

export class GetConnectionSessionFailure implements Action {
  readonly type = GET_CONNECTION_SESSION_FAILURE;
  constructor(public payload?: any) {}
}

export class GetConnectionSessionError implements Action {
  readonly type = GET_CONNECTION_SESSION_ERROR;
  constructor(public payload?: any) {}
}

export class GetConnectionSessionComplete implements Action {
  readonly type = GET_CONNECTION_SESSION_COMPLETE;
  constructor(public payload?: any) {}
}

export class UpdateConnectionSessionRequest implements Action {
  readonly type = UPDATE_CONNECTION_SESSION_REQUEST;
  constructor(public payload?: any) {}
}

export class UpdateConnectionSessionSuccess implements Action {
  readonly type = UPDATE_CONNECTION_SESSION_SUCCESS;
  constructor(public payload?: any) {}
}

export class UpdateConnectionSessionFailure implements Action {
  readonly type = UPDATE_CONNECTION_SESSION_FAILURE;
  constructor(public payload?: any) {}
}

export class UpdateConnectionSessionError implements Action {
  readonly type = UPDATE_CONNECTION_SESSION_ERROR;
  constructor(public payload?: any) {}
}

export class UpdateConnectionSessionComplete implements Action {
  readonly type = UPDATE_CONNECTION_SESSION_COMPLETE;
  constructor(public payload?: any) {}
}

export class CloseConnectionSessionRequest implements Action {
  readonly type = CLOSE_CONNECTION_SESSION_REQUEST;
  constructor(public payload?: any) {}
}

export class CloseConnectionSessionSuccess implements Action {
  readonly type = CLOSE_CONNECTION_SESSION_SUCCESS;
  constructor(public payload?: any) {}
}

export class CloseConnectionSessionFailure implements Action {
  readonly type = CLOSE_CONNECTION_SESSION_FAILURE;
  constructor(public payload?: any) {}
}

export class CloseConnectionSessionError implements Action {
  readonly type = CLOSE_CONNECTION_SESSION_ERROR;
  constructor(public payload?: any) {}
}

export class CloseConnectionSessionComplete implements Action {
  readonly type = CLOSE_CONNECTION_SESSION_COMPLETE;
  constructor(public payload?: any) {}
}

export type All 
  = ConfigureConnectivity
  | ShowConnectivity
  | HideConnectivity
  | InitializeConnection
  | EstablishConnection
  | Reconnecting
  | Connected
  | Disconnected
  | ConnectivityError
  | ConnectionSessionEnded
  | LoadConnectionSessionsRequest
  | LoadConnectionSessionsSuccess
  | LoadConnectionSessionsFailure
  | LoadConnectionSessionsError
  | LoadConnectionSessionsComplete
  | GetConnectionSessionRequest
  | GetConnectionSessionSuccess
  | GetConnectionSessionFailure
  | GetConnectionSessionError
  | GetConnectionSessionComplete
  | UpdateConnectionSessionRequest
  | UpdateConnectionSessionSuccess
  | UpdateConnectionSessionFailure
  | UpdateConnectionSessionError
  | UpdateConnectionSessionComplete
  | CloseConnectionSessionRequest
  | CloseConnectionSessionSuccess
  | CloseConnectionSessionFailure
  | CloseConnectionSessionError
  | CloseConnectionSessionComplete;
