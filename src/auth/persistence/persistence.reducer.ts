import { AuthState } from '../auth.state';

import * as PersistenceActions from './persistence.actions';
import { IPersistence, Persistence } from './persistence.model';
export type Action = PersistenceActions.All;

export interface PersistenceState extends IPersistence {
  persistenceType?: string | null;
  loading?: boolean;
  error?: string;
  errorCode?: string;
  errorMessage?: string;
}

export function persistenceReducer(state: PersistenceState, action: Action): PersistenceState {
  switch (action.type) {
    
    case PersistenceActions.LOAD_PERSISTENCE_REQUEST:
      return { ...state, ...action.payload };
      
    case PersistenceActions.LOAD_PERSISTENCE_SUCCESS:
      return { ...state, ...action.payload };
      
    case PersistenceActions.LOAD_PERSISTENCE_FAILURE:
      return { ...state, ...action.payload };
      
    case PersistenceActions.LOAD_PERSISTENCE_ERROR:
      return { ...state, ...action.payload };
    
    case PersistenceActions.LOAD_PERSISTENCE_COMPLETE:
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}