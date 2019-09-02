import { AuthState } from '../auth.state';

import * as UserPresenceActions from './user-presence.actions';
import { IUserPresence, UserPresence } from './user-presence.model';

export type Action = UserPresenceActions.All;

const defaultUserPresenceState = new UserPresence(false, false, '', '', '', 0);

export interface UserPresenceState extends IUserPresence {
  activated?: boolean;
  visible?: boolean;
  uid?: string;
  presenceType?: any;
  currentConnectionId?: string;
  connectionsCount?: number;
  lastOnline?: any;  // firebase.database.ServerValue.TIMESTAMP
  startAt?: Date;
  endAt?: Date;
  isoStartAt?: any; // ISO 8601
  isoEndAt?: any; // ISO 8601
  loading?: boolean;
  error?: string;
  errorCode?: string;
  errorMessage?: string;
}

export function userPresenceReducer(state: UserPresenceState = defaultUserPresenceState, action: Action): UserPresenceState {
  switch (action.type) {
    
    case UserPresenceActions.CONFIGURE_USER_PRESENCE:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.SHOW_USER_PRESENCE:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.HIDE_USER_PRESENCE:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.ESTABLISH_USER_PRESENCE:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.LOAD_USER_PRESENCE_REQUEST:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.LOAD_USER_PRESENCE_SUCCESS:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.LOAD_USER_PRESENCE_FAILURE:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.LOAD_USER_PRESENCE_ERROR:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.LOAD_USER_PRESENCE_COMPLETE:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.OPEN_CONNECTION:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.OPEN_CONNECTION_REQUEST:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.OPEN_CONNECTION_SUCCESS:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.OPEN_CONNECTION_FAILURE:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.OPEN_CONNECTION_ERROR:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.OPEN_CONNECTION_COMPLETE:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.CLOSE_CONNECTION:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.CLOSE_CONNECTION_REQUEST:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.CLOSE_CONNECTION_SUCCESS:
      return { ...state, ...action.payload };
      
    case UserPresenceActions.CLOSE_CONNECTION_FAILURE:
      return { ...state, ...action.payload };
      
    case UserPresenceActions.CLOSE_CONNECTION_ERROR:
      return { ...state, ...action.payload };
    
    case UserPresenceActions.CLOSE_CONNECTION_COMPLETE:
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}