
import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

import { CustomerStoreState } from './customer-store.state';

import * as fromCustomerAccount from './customer-account/customer-account.reducer';

export const CUSTOMER_STORE_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<CustomerStoreState>>('CustomerStoreState reducers');

export function getCustomerStoreReducers(): ActionReducerMap<CustomerStoreState> {
  // map of reducers
  return {
    customerAccount: fromCustomerAccount.customerAccountReducer
  }
}

export let getCustomerStoreReducersProvider = {
  provide: CUSTOMER_STORE_REDUCER_TOKEN,
  useFactory: getCustomerStoreReducers
};