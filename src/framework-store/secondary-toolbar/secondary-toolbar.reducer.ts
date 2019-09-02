import { FrameworkStoreState } from '../framework-store.state';

import * as SecondaryToolbarActions from './secondary-toolbar.actions';
import { ISecondaryToolbar, SecondaryToolbar } from './secondary-toolbar.model';
export type Action = SecondaryToolbarActions.All;

const defaultSecondaryToolbarState = new SecondaryToolbar(false, false);

export interface SecondaryToolbarState extends ISecondaryToolbar {
  activated?: boolean;
  visible?: boolean;
}

export function secondaryToolbarReducer(state: SecondaryToolbarState = defaultSecondaryToolbarState, action: Action): SecondaryToolbarState {
  switch (action.type) {
    case SecondaryToolbarActions.CONFIGURE_SECONDARY_TOOLBAR:
      return { ...state, ...action.payload };
    
    case SecondaryToolbarActions.SHOW_SECONDARY_TOOLBAR:
      return { ...state, ...action.payload };
    
    case SecondaryToolbarActions.HIDE_SECONDARY_TOOLBAR:
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}