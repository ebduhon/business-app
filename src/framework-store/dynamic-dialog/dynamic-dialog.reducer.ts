import { FrameworkStoreState } from '../framework-store.state';

import * as DynamicDialogActions from './dynamic-dialog.actions';
import { IDynamicDialog, DynamicDialog } from './dynamic-dialog.model';
export type Action = DynamicDialogActions.All;

const defaultDynamicDialogState = new DynamicDialog(false, false);

export interface DynamicDialogState extends IDynamicDialog {
  activated?: boolean;
  visible?: boolean;
}

export function dynamicDialogReducer(state: DynamicDialogState = defaultDynamicDialogState, action: Action): DynamicDialogState {
  switch (action.type) {
    case DynamicDialogActions.CONFIGURE_DYNAMIC_DIALOG:
      return { ...state, ...action.payload };
    
    case DynamicDialogActions.SHOW_DYNAMIC_DIALOG:
      return { ...state, ...action.payload };
    
    case DynamicDialogActions.HIDE_DYNAMIC_DIALOG:
      return { ...state, ...action.payload };
    
    case DynamicDialogActions.LOAD_DYNAMIC_DIALOG:
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}