import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { AdministrationState } from '../administration.state';

import { Account } from './account.model';
import * as AccountActions from './account.actions';
import * as fromAccount from './account.reducer';
type Action = AccountActions.All;

export const selectAdministrationState = createFeatureSelector<AdministrationState>('administration');

export const selectAccountState = createSelector(
  selectAdministrationState,
  (state: AdministrationState) => state.account
);

export const {
  // select the array of account ids
  selectIds: selectAccountIds,
  
  // select the dictionary of user entities
  selectEntities: selectAccountEntities,
  
  // select the array of accounts
  selectAll: selectAllAccounts,
  
  // select the total account count
  selectTotal: selectAccountTotal
} = fromAccount.adapter.getSelectors(selectAccountState);

//TODO: fix state conflicts between top-level slice selected as `administration` or `accounts`
export const selectCurrentAccountId = createSelector(selectAccountState, fromAccount.getSelectedAccountId);
export const selectCurrentAccount = createSelector(
  selectAccountEntities,
  selectCurrentAccountId,
  (accountEntities, accountId) => accountEntities[accountId]
);

@Injectable()
export class AccountFacade {
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  accountState$ = this.store.select(selectAccountState);
  allAccounts$ = this.store.select(selectAllAccounts);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  loadAccounts() {
    this.store.dispatch(new AccountActions.LoadAccounts({ accounts: [{id: '1', name: 'default account one'}, {id: '2', name: 'default account two'}]}));
    return this.accountState$;
  }
  
  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store<AdministrationState>
  ) {}
  
  // ************************************************************
  // Internal Methods
  // ************************************************************
  
  
}