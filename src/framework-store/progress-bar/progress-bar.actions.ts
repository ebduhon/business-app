import { Action } from '@ngrx/store';

export const CONFIGURE_PROGRESS_BAR = '[ProgressBar] Configure progress-bar';
export const SHOW_PROGRESS_BAR = '[ProgressBar] Show progress-bar';
export const HIDE_PROGRESS_BAR = '[ProgressBar] Hide progress-bar';
export const STEP_PROGRESS_BAR_VALUE = '[ProgressBar] Step progress-bar value';
export const STEP_PROGRESS_BAR_BUFFER = '[ProgressBar] Step progress-bar buffer';

export class ConfigureProgressBar implements Action {
  readonly type = CONFIGURE_PROGRESS_BAR;
  constructor(public payload?: any) {}
}

export class ShowProgressBar implements Action {
  readonly type = SHOW_PROGRESS_BAR;
  constructor(public payload?: any) {}
}

export class HideProgressBar implements Action {
  readonly type = HIDE_PROGRESS_BAR;
  constructor(public payload?: any) {}
}

export class StepProgressBarValue implements Action {
  readonly type = STEP_PROGRESS_BAR_VALUE;
  constructor(public payload?: any) {}
}

export class StepProgressBarBuffer implements Action {
  readonly type = STEP_PROGRESS_BAR_BUFFER;
  constructor(public payload?: any) {}
}


export type All
  = ConfigureProgressBar
  | ShowProgressBar
  | HideProgressBar
  | StepProgressBarValue
  | StepProgressBarBuffer;