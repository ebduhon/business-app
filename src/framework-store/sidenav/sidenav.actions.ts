import { Action } from '@ngrx/store';

export const CONFIGURE_SIDENAV = '[Sidenav] Configure sidenav';
export const SHOW_SIDENAV = '[Sidenav] Show sidenav';
export const HIDE_SIDENAV = '[Sidenav] Hide sidenav';

export const TOGGLE_SIDENAV = '[Sidenav] Toggle sidenav';
export const OPEN_SIDENAV = '[Sidenav] Open sidenav';
export const CLOSE_SIDENAV = '[Sidenav] Close sidenav';

export class ConfigureSidenav implements Action {
  readonly type = CONFIGURE_SIDENAV;
  constructor(public payload?: any) {}
}

export class ShowSidenav implements Action {
  readonly type = SHOW_SIDENAV;
  constructor(public payload?: any) {}
}

export class HideSidenav implements Action {
  readonly type = HIDE_SIDENAV;
  constructor(public payload?: any) {}
}

export class ToggleSidenav implements Action {
  readonly type = TOGGLE_SIDENAV;
  constructor(public payload?: any) {}
}

export class OpenSidenav implements Action {
  readonly type = OPEN_SIDENAV;
  constructor(public payload?: any) {}
}

export class CloseSidenav implements Action {
  readonly type = CLOSE_SIDENAV;
  constructor(public payload?: any) {}
}

export type All
  = ConfigureSidenav
  | ShowSidenav
  | HideSidenav
  | ToggleSidenav
  | OpenSidenav
  | CloseSidenav;