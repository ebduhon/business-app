import { FrameworkStoreState } from '../framework-store.state';

import * as StatusBarActions from './status-bar.actions';
import { IStatusBar, StatusBar } from './status-bar.model';
export type Action = StatusBarActions.All;

const defaultStatusBarState = new StatusBar(false, false);

export interface StatusBarState extends IStatusBar {
  activated?: boolean;
  visible?: boolean;
}

export function statusBarReducer(state: StatusBarState = defaultStatusBarState, action: Action): StatusBarState {
  switch (action.type) {
    case StatusBarActions.CONFIGURE_STATUS_BAR:
      return { ...state, ...action.payload };
      
    case StatusBarActions.SHOW_STATUS_BAR:
      return { ...state, ...action.payload };
    
    case StatusBarActions.HIDE_STATUS_BAR:
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}