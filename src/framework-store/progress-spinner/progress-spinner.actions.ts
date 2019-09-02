import { Action } from '@ngrx/store';

export const CONFIGURE_PROGRESS_SPINNER = '[ProgressSpinner] Configure progress-spinner';
export const SHOW_PROGRESS_SPINNER = '[ProgressSpinner] Show progress-spinner';
export const HIDE_PROGRESS_SPINNER = '[ProgressSpinner] Hide progress-spinner';
export const STEP_PROGRESS_SPINNER_VALUE = '[ProgressSpinner] Step progress-spinner value';

export class ConfigureProgressSpinner implements Action {
  readonly type = CONFIGURE_PROGRESS_SPINNER;
  constructor(public payload?: any) {}
}

export class ShowProgressSpinner implements Action {
  readonly type = SHOW_PROGRESS_SPINNER;
  constructor(public payload?: any) {}
}

export class HideProgressSpinner implements Action {
  readonly type = HIDE_PROGRESS_SPINNER;
  constructor(public payload?: any) {}
}

export class StepProgressSpinnerValue implements Action {
  readonly type = STEP_PROGRESS_SPINNER_VALUE;
  constructor(public payload?: any) {}
}

export type All
  = ConfigureProgressSpinner
  | ShowProgressSpinner
  | HideProgressSpinner
  | StepProgressSpinnerValue;