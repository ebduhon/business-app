import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

//TODO: firebase

//TODO: rxjs

import { CustomerStoreState } from '../customer-store.state';

import { CustomerAccount } from './customer-account.model';
import * as CustomerAccountActions from './customer-account.actions';
type Action = CustomerAccountActions.All;

export const selectCustomerStoreState = createFeatureSelector<CustomerStoreState>('customer-store');

export const selectCustomerAccountState = createSelector(
  selectCustomerStoreState,
  (state: CustomerStoreState) => state.customerAccount
);

export const selectCustomerAccountIsActivated = createSelector(
  selectCustomerStoreState,
  (state: CustomerStoreState) => state.customerAccount.activated
);

export const selectCustomerAccountIsVisible = createSelector(
  selectCustomerStoreState,
  (state: CustomerStoreState) => state.customerAccount.visible
);

@Injectable()
export class CustomerAccountFacade {
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
    
    customerAccount$ = this.store.select(selectCustomerAccountState);
    customerAccountIsActivated$ = this.store.select(selectCustomerAccountIsActivated);
    customerAccountIsVisible$ = this.store.select(selectCustomerAccountIsVisible);
    
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  configureCustomerAccount(customerAccountConfig) {
    this.store.dispatch(new CustomerAccountActions.ConfigureCustomerAccount(customerAccountConfig));
    return this.customerAccount$;
  }
  
  activateCustomerAccount() {
    this.store.dispatch(new CustomerAccountActions.ConfigureCustomerAccount({ activated: true }));
    return this.customerAccount$;
  }
  
  deactivateCustomerAccount() {
    this.store.dispatch(new CustomerAccountActions.ConfigureCustomerAccount({ activated : false }));
    return this.customerAccount$;
  }
  
  showCustomerAccount() {
    this.store.dispatch(new CustomerAccountActions.ShowCustomerAccount({ visible: true }));
    return this.customerAccount$;
  }
  
  hideCustomerAccount() {
    this.store.dispatch(new CustomerAccountActions.HideCustomerAccount({ visible: false }));
    return this.customerAccount$;
  }
  
  constructor(
    private actions$: Actions,
    private store: Store<CustomerStoreState>,
  ) {}
  
  // ************************************************************
  // Internal Methods
  // ************************************************************  
}