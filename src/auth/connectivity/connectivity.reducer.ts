import { AuthState } from '../auth.state';

import * as ConnectivityActions from './connectivity.actions';
import { IConnectivity, Connectivity } from './connectivity.model';
export type Action = ConnectivityActions.All;

const defaultConnectivityState = new Connectivity(false, false, false);

export interface ConnectivityState extends IConnectivity {
  activated?: boolean;
  visible?: boolean;
  connected?: boolean;
  loading?: boolean;
  error?: string;
  errorCode?: string;
  errorMessage?: string;
}

export function connectivityReducer(state: ConnectivityState = defaultConnectivityState, action: Action): ConnectivityState {
  switch (action.type) {
    case ConnectivityActions.CONFIGURE_CONNECTIVITY:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.SHOW_CONNECTIVITY:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.HIDE_CONNECTIVITY:
      return { ...state, ...action.payload };
      
    case ConnectivityActions.INITIALIZE_CONNECTION:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.ESTABLISH_CONNECTION:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.RECONNECTING:
      return { ...state, ...action.payload };
      
    case ConnectivityActions.CONNECTED:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.DISCONNECTED:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.CONNECTIVITY_ERROR:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.LOAD_CONNECTION_SESSIONS_REQUEST:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.LOAD_CONNECTION_SESSIONS_SUCCESS:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.LOAD_CONNECTION_SESSIONS_FAILURE:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.LOAD_CONNECTION_SESSIONS_ERROR:
      return { ...state, ...action.payload };
      
    case ConnectivityActions.LOAD_CONNECTION_SESSIONS_COMPLETE:
      return { ...state, ...action.payload };
      
    case ConnectivityActions.GET_CONNECTION_SESSION_REQUEST:
      return { ...state, ...action.payload };
      
    case ConnectivityActions.GET_CONNECTION_SESSION_SUCCESS:
      return { ...state, ...action.payload };
      
    case ConnectivityActions.GET_CONNECTION_SESSION_FAILURE:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.GET_CONNECTION_SESSION_ERROR:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.GET_CONNECTION_SESSION_COMPLETE:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.UPDATE_CONNECTION_SESSION_REQUEST:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.UPDATE_CONNECTION_SESSION_SUCCESS:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.UPDATE_CONNECTION_SESSION_FAILURE:
      return { ...state, ...action.payload };
      
    case ConnectivityActions.UPDATE_CONNECTION_SESSION_ERROR:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.UPDATE_CONNECTION_SESSION_COMPLETE:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.CLOSE_CONNECTION_SESSION_REQUEST:
      return { ...state, ...action.payload };
      
    case ConnectivityActions.CLOSE_CONNECTION_SESSION_SUCCESS:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.CLOSE_CONNECTION_SESSION_FAILURE:
      return { ...state, ...action.payload };
    
    case ConnectivityActions.CLOSE_CONNECTION_SESSION_ERROR:
      return { ...state, ...action.payload };
      
    case ConnectivityActions.CLOSE_CONNECTION_SESSION_COMPLETE:
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}