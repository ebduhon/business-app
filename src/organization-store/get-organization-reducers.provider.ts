
import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

import { OrganizationState } from './organization.state';

import * as fromOnboarding from './onboarding/onboarding.reducer';

export const ORGANIZATION_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<OrganizationState>>('Organization reducers');

export function getOrganizationReducers(): ActionReducerMap<OrganizationState> {
  // map of reducers
  return {
    onboarding: fromOnboarding.onboardingReducer
  }
}

export let getOrganizationReducersProvider = {
  provide: ORGANIZATION_REDUCER_TOKEN,
  useFactory: getOrganizationReducers
};