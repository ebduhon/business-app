import { FrameworkStoreState } from '../framework-store.state';

import * as LoadingSpinnerActions from './loading-spinner.actions';
import { ILoadingSpinner, LoadingSpinner } from './loading-spinner.model';
export type Action = LoadingSpinnerActions.All;

const defaultLoadingSpinnerState = new LoadingSpinner(false, false);

export interface LoadingSpinnerState extends ILoadingSpinner {
  activated?: boolean;
  visible?: boolean;
}

export function loadingSpinnerReducer(state: LoadingSpinnerState = defaultLoadingSpinnerState, action: Action): LoadingSpinnerState {
  switch (action.type) {
    case LoadingSpinnerActions.CONFIGURE_LOADING_SPINNER:
      return { ...state, ...action.payload };
    
    case LoadingSpinnerActions.OPEN_LOADING_SPINNER:
      return { ...state, ...action.payload };
    
    case LoadingSpinnerActions.CLOSE_LOADING_SPINNER:
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}