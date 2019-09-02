import { FrameworkStoreState } from '../framework-store.state';

import * as SidenavActions from './sidenav.actions';
import { ISidenav, Sidenav } from './sidenav.model';
export type Action = SidenavActions.All;

const defaultSidenavState = new Sidenav(true, true, 'over', false, false, false);

export interface SidenavState extends ISidenav {
  activated?: boolean;
  visible?: boolean;
  mode?: string;
  opened?: boolean;
  covered?: boolean;
  fixed?: boolean;
  fixedTopGap?: number;
  fixedBottomGap?: number;
}

export function sidenavReducer(state: SidenavState = defaultSidenavState, action: Action): SidenavState {
  switch (action.type) {
    case SidenavActions.CONFIGURE_SIDENAV:
      return { ...state, ...action.payload };
    
    case SidenavActions.SHOW_SIDENAV:
      return { ...state, ...action.payload };
    
    case SidenavActions.HIDE_SIDENAV:
      return { ...state, ...action.payload };
    
    case SidenavActions.TOGGLE_SIDENAV:
      return { 
        ...state, 
        opened: !state.opened 
      };
    
    case SidenavActions.OPEN_SIDENAV:
      return { ...state, ...action.payload };
    
    case SidenavActions.CLOSE_SIDENAV:
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}