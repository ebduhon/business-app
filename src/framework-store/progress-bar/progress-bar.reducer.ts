import { FrameworkStoreState } from '../framework-store.state';

import * as ProgressBarActions from './progress-bar.actions';
import { IProgressBar, ProgressBar } from './progress-bar.model';
export type Action = ProgressBarActions.All;

const defaultProgressBarState = new ProgressBar(false, false, 'primary', 'query');

export interface ProgressBarState extends IProgressBar {
  activated?: boolean;
  visible?: boolean;
  color?: string;
  mode?: string;
  value?: number;
  bufferValue?: number;
}

export function progressBarReducer(state: ProgressBarState = defaultProgressBarState, action: Action): ProgressBarState {
  switch (action.type) {
    case ProgressBarActions.CONFIGURE_PROGRESS_BAR:
      return { ...state, ...action.payload };
    
    case ProgressBarActions.SHOW_PROGRESS_BAR:
      return { ...state, ...action.payload };
    
    case ProgressBarActions.HIDE_PROGRESS_BAR:
      return { ...state, ...action.payload };
    
    case ProgressBarActions.STEP_PROGRESS_BAR_VALUE:
      return {
        ...state,
        value: Math.max(0, Math.min(100, (action.payload.value + state.value)))
      };
    
    case ProgressBarActions.STEP_PROGRESS_BAR_BUFFER:
      return {
        ...state,
        bufferValue: Math.max(0, Math.min(100, (action.payload.bufferValue + state.bufferValue)))
      };
    
    default:
      return state;
  }
}