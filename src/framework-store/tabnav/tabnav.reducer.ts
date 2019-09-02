import { FrameworkStoreState } from '../framework-store.state';

import * as TabnavActions from './tabnav.actions';
import { ITabnav, Tabnav } from './tabnav.model';
export type Action = TabnavActions.All;

const defaultTabnavState = new Tabnav(false, false, [{id: 1, label: 'HOME', route: '/home'}, {id: 2, label: 'SIGN IN', route: '/sign-in'}] );

export interface TabnavState extends ITabnav {
  activated?: boolean;
  visible?: boolean;
  tabs?: any;
}

export function tabnavReducer(state: TabnavState = defaultTabnavState, action: Action): TabnavState {
  switch (action.type) {
    case TabnavActions.CONFIGURE_TABNAV:
      return { ...state, ...action.payload };
    
    case TabnavActions.SHOW_TABNAV:
      return { ...state, ...action.payload };
    
    case TabnavActions.HIDE_TABNAV:
      return { ...state, ...action.payload };
      
    case TabnavActions.LOAD_TABNAV:
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}