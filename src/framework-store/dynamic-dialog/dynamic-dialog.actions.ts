import { Action } from '@ngrx/store';

//TODO: related to framework user-interface configuration options
export const CONFIGURE_DYNAMIC_DIALOG = '[DynamicDialog] Configure dynamic-dialog';
export const SHOW_DYNAMIC_DIALOG = '[DynamicDialog] Show dynamic-dialog';
export const HIDE_DYNAMIC_DIALOG = '[DynamicDialog] Hide dynamic-dialog';
export const LOAD_DYNAMIC_DIALOG = '[DynamicDialog] Load dynamic-dialog';

// export const LOAD_DYNAMIC_DIALOG_CONFIGURATIONS_

// REQUEST: for when you first send the api call
// SUCCESS: for when the api call is done and successfully returned data
// FAILURE: for when the api call failed and responded with an error
// COMPLETE: sometimes used at the end of the call regardless of status

// REQUESTED, SUCCEEDED, FAILED, COMPLETED
// SELECTION_CHOSEN

export const CONFIGURE_DYNAMIC_DIALOG_CLOSE = '[DynamicDialog] Configure dynamic-dialog close';
export const CONFIGURE_DYNAMIC_DIALOG_TITLE = '[DynamicDialog] Configure dynamic-dialog title';
export const CONFIGURE_DYNAMIC_DIALOG_CONTENT = '[DynamicDialog] Configure dynamic-dialog content';
export const CONFIGURE_DYNAMIC_DIALOG_SELECTIONS = '[DynamicDialog] Configure dynamic-dialog selections';


export class ConfigureDynamicDialog implements Action {
  readonly type = CONFIGURE_DYNAMIC_DIALOG;
  constructor(public payload?: any) {}
}

export class ShowDynamicDialog implements Action {
  readonly type = SHOW_DYNAMIC_DIALOG;
  constructor(public payload?: any) {}
}

export class HideDynamicDialog implements Action {
  readonly type = HIDE_DYNAMIC_DIALOG;
  constructor(public payload?: any) {}
}

export class LoadDynamicDialog implements Action {
  readonly type = LOAD_DYNAMIC_DIALOG;
  constructor(public payload?: any) {}
}

export type All
  = ConfigureDynamicDialog
  | ShowDynamicDialog
  | HideDynamicDialog
  | LoadDynamicDialog;