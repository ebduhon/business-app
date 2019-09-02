import { Action } from '@ngrx/store';
//TODO: specify configuration details for a particular loading spinner selected from of many loading spinners
// this enables me to create a stream of loading-spinner actions that show/hide 
// by loading-spinner id 
// which corresponds to a specific loading-spinner.component 
// by registering itself with the framework store 
//TODO: review the angular api, such as ComponentFactoryResolver 
// to dynamically add/remove loading-spinner components 
// and to register the loading-spinner instance in the ngrx/store 
// to enable a specific loading-spinner.component the ability to "listening to actions"

//TODO: expand upon the framework layout configuration capabilities 
//TODO: enhance loading-spinner configuration options i.e., duration, color, layout, etc.

export const CONFIGURE_LOADING_SPINNER = '[LoadingSpinner] Configure loading-spinner';

export const OPEN_LOADING_SPINNER = '[LoadingSpinner] Open loading-spinner';
export const CLOSE_LOADING_SPINNER = '[LoadingSpinner] Close loading-spinner';

export class ConfigureLoadingSpinner implements Action {
  readonly type = CONFIGURE_LOADING_SPINNER;
  constructor(public payload?: any) {}
}

export class OpenLoadingSpinner implements Action {
  readonly type = OPEN_LOADING_SPINNER;
  constructor(public payload?: any) {}
}

export class CloseLoadingSpinner implements Action {
  readonly type = CLOSE_LOADING_SPINNER;
  constructor(public payload?: any) {}
}

export type All
  = ConfigureLoadingSpinner
  | OpenLoadingSpinner
  | CloseLoadingSpinner;