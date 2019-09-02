import { AuthState } from '../auth.state';

import * as StatusActions from './status.actions';
import { IStatus, Status } from './status.model';

export type Action = StatusActions.All;

const defaultStatusState = new Status(false);

export interface StatusState extends IStatus {
  isAuthenticated?: boolean;
  startAt?: Date;  // default date
  endAt?: Date;  // default date
  isoStartAt?: any; // ISO 8601
  isoEndAt?: any; // ISO 8601
  loading?: boolean;
  error?: string;
  errorCode?: string;
  errorMessage?: string;
}

export function statusReducer(state: StatusState = defaultStatusState, action: Action): StatusState {
  switch (action.type) {
    case StatusActions.INITIALIZE_STATUS_REQUEST:
      return { ...state, ...action.payload };
    
    case StatusActions.INITIALIZE_STATUS_SUCCESS:
      return { ...state, ...action.payload };
      
    case StatusActions.INITIALIZE_STATUS_FAILURE:
      return { ...state, ...action.payload };
    
    case StatusActions.INITIALIZE_STATUS_COMPLETE:
      return { ...state, ...action.payload };
    
    case StatusActions.AUTHENTICATED:
      return { ...state, ...action.payload };
    
    case StatusActions.NOT_AUTHENTICATED:
      return { ...state, ...action.payload };
      
    case StatusActions.AUTHENTICATION_REQUEST:
      return { ...state, ...action.payload };
    
    case StatusActions.AUTHENTICATION_SUCCESS:
      return { ...state, ...action.payload };
    
    case StatusActions.AUTHENTICATION_FAILURE:
      return { ...state, ...action.payload };
    
    case StatusActions.AUTHENTICATION_COMPLETE:
      return { ...state, ...action.payload };
      
    default:
      return state;
  }
}