import { FrameworkStoreState } from '../framework-store.state';

import * as ProgressSpinnerActions from './progress-spinner.actions';
import { IProgressSpinner, ProgressSpinner } from './progress-spinner.model';
export type Action = ProgressSpinnerActions.All;

const defaultProgressSpinnerState = new ProgressSpinner(false, false, 'primary', 'indeterminate');

export interface ProgressSpinnerState extends IProgressSpinner {
  activated?: boolean;
  visible?: boolean;
  color?: string;
  mode?: string;
  value?: number;
  strokeWidth?: number;
  diameter?: number;
}

export function progressSpinnerReducer(state: ProgressSpinnerState = defaultProgressSpinnerState, action: Action): ProgressSpinnerState {
  switch (action.type) {
    case ProgressSpinnerActions.CONFIGURE_PROGRESS_SPINNER:
      return { ...state, ...action.payload };
    
    case ProgressSpinnerActions.SHOW_PROGRESS_SPINNER:
      return { ...state, ...action.payload };
    
    case ProgressSpinnerActions.HIDE_PROGRESS_SPINNER:
      return { ...state, ...action.payload };
    
    case ProgressSpinnerActions.STEP_PROGRESS_SPINNER_VALUE:
      return {
        ...state,
        value: Math.max(0, Math.min(100, (action.payload.value + state.value)))
      };
    
    default:
      return state;
  }
}