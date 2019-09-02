import { Action } from '@ngrx/store';

//TODO: related to framework user-interface configuration options
export const CONFIGURE_STATUS_BAR = '[StatusBar] Configure status-bar';
export const SHOW_STATUS_BAR = '[StatusBar] Show status-bar';
export const HIDE_STATUS_BAR = '[StatusBar] Hide status-bar';

export class ConfigureStatusBar implements Action {
  readonly type = CONFIGURE_STATUS_BAR;
  constructor(public payload?: any) {}
}

export class ShowStatusBar implements Action {
  readonly type = SHOW_STATUS_BAR;
  constructor(public payload?: any) {}
}

export class HideStatusBar implements Action {
  readonly type = HIDE_STATUS_BAR;
  constructor(public payload?: any) {}
}

export type All
  = ConfigureStatusBar
  | ShowStatusBar
  | HideStatusBar;