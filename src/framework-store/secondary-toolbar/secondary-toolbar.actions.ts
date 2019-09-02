import { Action } from '@ngrx/store';

//TODO: related to framework user-interface configuration options
export const CONFIGURE_SECONDARY_TOOLBAR = '[SecondaryToolbar] Configure secondary-toolbar';
export const SHOW_SECONDARY_TOOLBAR = '[SecondaryToolbar] Show secondary-toolbar';
export const HIDE_SECONDARY_TOOLBAR = '[SecondaryToolbar] Hide secondary-toolbar';

export class ConfigureSecondaryToolbar implements Action {
  readonly type = CONFIGURE_SECONDARY_TOOLBAR;
  constructor(public payload?: any) {}
}

export class ShowSecondaryToolbar implements Action {
  readonly type = SHOW_SECONDARY_TOOLBAR;
  constructor(public payload?: any) {}
}

export class HideSecondaryToolbar implements Action {
  readonly type = HIDE_SECONDARY_TOOLBAR;
  constructor(public payload?: any) {}
}

export type All
  = ConfigureSecondaryToolbar
  | ShowSecondaryToolbar
  | HideSecondaryToolbar;