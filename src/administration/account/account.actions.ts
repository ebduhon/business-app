import { Action } from '@ngrx/store';
import { Account } from './account.model';

export const LOAD_ACCOUNTS = '[Account] Load Accounts';
export const ADD_ACCOUNT = '[Account] Add Account';
export const ADD_ACCOUNTS = '[Account] Add Accounts';
export const UPDATE_ACCOUNT = '[Account] Update Account';
export const UPDATE_ACCOUNTS = '[Account] Update Accounts';
export const DELETE_ACCOUNT = '[Account] Delete Account';
export const DELETE_ACCOUNTS = '[Account] Delete Accounts';
export const CLEAR_ACCOUNTS = '[Account] Clear Accounts';

export class LoadAccounts implements Action {
  readonly type = LOAD_ACCOUNTS;
  
  constructor(public payload: { accounts: Account[] }) {}
}

export class AddAccount implements Action {
  readonly type = ADD_ACCOUNT;
  
  constructor(public payload: { account: Account }) {}
}

export class AddAccounts implements Action {
  readonly type = ADD_ACCOUNTS;
  
  constructor(public payload: { accounts: Account[] }) {}
}

export class UpdateAccount implements Action {
  readonly type = UPDATE_ACCOUNT;
  
  constructor(public payload: { account: { id: string, changes: Account } }) {}
}

export class UpdateAccounts implements Action {
  readonly type = UPDATE_ACCOUNTS;
  
  constructor(public payload: { accounts: { id: string, changes: Account }[] }) {}
}

export class DeleteAccount implements Action {
  readonly type = DELETE_ACCOUNT;
  
  constructor(public payload: { id: string }) {}
}

export class DeleteAccounts implements Action {
  readonly type = DELETE_ACCOUNTS;
  
  constructor(public payload: { ids: string[] }) {}
}

export class ClearAccounts implements Action {
  readonly type = CLEAR_ACCOUNTS;
}

export type All 
  = LoadAccounts
  | AddAccount
  | AddAccounts
  | UpdateAccount
  | UpdateAccounts
  | DeleteAccount
  | DeleteAccounts
  | ClearAccounts;