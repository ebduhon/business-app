import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

import { AdministrationState } from './administration.state';

import * as fromAccount from './account/account.reducer';

export const ADMINISTRATION_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AdministrationState>>('Administration reducers');

export function getAdministrationReducers(): ActionReducerMap<AdministrationState> {
  return {
    account: fromAccount.reducer
  }
}

export let getAdministrationReducersProvider = {
  provide: ADMINISTRATION_REDUCER_TOKEN,
  useFactory: getAdministrationReducers
};