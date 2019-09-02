import { Action } from '@ngrx/store';

export const CONFIGURE_ONBOARDING = '[Onboarding] configure onboarding';
export const SHOW_ONBOARDING = '[Onboarding] show onboarding';
export const HIDE_ONBOARDING = '[Onboarding] hide onboarding';

export const LOAD_ONBOARDING_REQUEST = '[Onboarding] load onboarding request';
export const LOAD_ONBOARDING_SUCCESS = '[Onboarding] load onboarding success';
export const LOAD_ONBOARDING_FAILURE = '[Onboarding] load onboarding failure';
export const LOAD_ONBOARDING_COMPLETE = '[Onboarding] load onboarding complete';

export class ConfigureOnboarding implements Action {
  readonly type = CONFIGURE_ONBOARDING;
  constructor(public payload?: any) {}
}

export class ShowOnboarding implements Action {
  readonly type = SHOW_ONBOARDING;
  constructor(public payload?: any) {}
}

export class HideOnboarding implements Action {
  readonly type = HIDE_ONBOARDING;
  constructor(public payload?: any) {}
}

export class LoadOnboardingRequest implements Action {
  readonly type = LOAD_ONBOARDING_REQUEST;
  constructor(public payload?: any) {}
}

export class LoadOnboardingSuccess implements Action {
  readonly type = LOAD_ONBOARDING_SUCCESS;
  constructor(public payload?: any) {}
}

export class LoadOnboardingFailure implements Action {
  readonly type = LOAD_ONBOARDING_FAILURE;
  constructor(public payload?: any) {}
}

export class LoadOnboardingComplete implements Action {
  readonly type = LOAD_ONBOARDING_COMPLETE;
  constructor(public payload?: any) {}
}

export type All
  = ConfigureOnboarding
  | ShowOnboarding
  | HideOnboarding
  | LoadOnboardingRequest
  | LoadOnboardingSuccess
  | LoadOnboardingFailure
  | LoadOnboardingComplete;