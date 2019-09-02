import { Action } from '@ngrx/store';

//TODO: related to framework user-interface configuration options
export const CONFIGURE_TABNAV = '[Tabnav] Configure tabnav';
export const SHOW_TABNAV = '[Tabnav] Show tabnav';
export const HIDE_TABNAV = '[Tabnav] Hide tabnav';
export const LOAD_TABNAV = '[Tabnav] Load tabnav';

export class ConfigureTabnav implements Action {
  readonly type = CONFIGURE_TABNAV;
  constructor(public payload?: any) {}
}

export class ShowTabnav implements Action {
  readonly type = SHOW_TABNAV;
  constructor(public payload?: any) {}
}

export class HideTabnav implements Action {
  readonly type = HIDE_TABNAV;
  constructor(public payload?: any) {}
}

export class LoadTabnav implements Action {
  readonly type = LOAD_TABNAV;
  constructor(public payload?: any) {}
}

//TODO: add tab, remove tab
//TODO: get tabnav instance

export type All
  = ConfigureTabnav
  | ShowTabnav
  | HideTabnav
  | LoadTabnav;