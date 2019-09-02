import { FrameworkStoreState } from '../framework-store.state';

import * as UiWindowActions from './ui-window.actions';
import { IUiWindow, UiWindow } from './ui-window.model';
export type Action = UiWindowActions.All;

const initialUiWindowState = new UiWindow(window.innerHeight, window.innerWidth);

export interface UiWindowState extends IUiWindow {
  height?: number;
  width?: number;
}

export function uiWindowReducer(state: UiWindowState = initialUiWindowState, action: Action): UiWindowState {
  switch (action.type) {
    case UiWindowActions.RESIZE_UI_WINDOW: {
      
      const windowHeight: number = action.payload['height'];
      const windowWidth: number = action.payload['width'];
      
      return { 
        ...state, 
        height: windowHeight,
        width: windowWidth 
      };
      
    }

    default:
      return state;
  }
}