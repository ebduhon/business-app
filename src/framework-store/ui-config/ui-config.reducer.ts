import { FrameworkStoreState } from '../framework-store.state';

import * as UiConfigActions from './ui-config.actions';
import { IUiConfig, UiConfig } from './ui-config.model';
export type Action = UiConfigActions.All;

const defaultUiConfigState = new UiConfig("", "");

export interface UiConfigState extends IUiConfig {
  vm?: any;
  vmDefinitions?: any;
}

export function uiConfigReducer(state: UiConfigState = defaultUiConfigState, action: Action): UiConfigState {
  switch (action.type) {
    case UiConfigActions.LOAD_UI_CONFIG_REQUEST:
      return { ...state, ...action.payload };
    
    case UiConfigActions.LOAD_UI_CONFIG_SUCCESS:
      return { ...state, ...action.payload };
    
    case UiConfigActions.LOAD_UI_CONFIG_FAILURE:
      return { ...state, ...action.payload };
      
    case UiConfigActions.LOAD_UI_CONFIG_ERROR:
      return { ...state, ...action.payload };
      
    case UiConfigActions.LOAD_UI_CONFIG_COMPLETE:
      return { ...state, ...action.payload };
    
    default: 
      return state;
  }
}