import { Action } from '@ngrx/store';

export const CONFIGURE_CUSTOMER_ACCOUNT = '[Customer Account] configure customer account';
export const SHOW_CUSTOMER_ACCOUNT = '[Customer Account] show customer account';
export const HIDE_CUSTOMER_ACCOUNT = '[Customer Account] hide customer account';

export const LOAD_CUSTOMER_ACCOUNT_REQUEST = '[Customer Account] load customer account request';
export const LOAD_CUSTOMER_ACCOUNT_SUCCESS = '[Customer Account] load customer account success';
export const LOAD_CUSTOMER_ACCOUNT_FAILURE = '[Customer Account] load customer account failure';
export const LOAD_CUSTOMER_ACCOUNT_COMPLETE = '[Customer Account] load customer account complete';

export class ConfigureCustomerAccount implements Action {
  readonly type = CONFIGURE_CUSTOMER_ACCOUNT;
  constructor(public payload?: any) {}
}

export class ShowCustomerAccount implements Action {
  readonly type = SHOW_CUSTOMER_ACCOUNT;
  constructor(public payload?: any) {}
}

export class HideCustomerAccount implements Action {
  readonly type = HIDE_CUSTOMER_ACCOUNT;
  constructor(public payload?: any) {}
}

export class LoadCustomerAccountRequest implements Action {
  readonly type = LOAD_CUSTOMER_ACCOUNT_REQUEST;
  constructor(public payload?: any) {}
}

export class LoadCustomerAccountSuccess implements Action {
  readonly type = LOAD_CUSTOMER_ACCOUNT_SUCCESS;
  constructor(public payload?: any) {}
}

export class LoadCustomerAccountFailure implements Action {
  readonly type = LOAD_CUSTOMER_ACCOUNT_FAILURE;
  constructor(public payload?: any) {}
}

export class LoadCustomerAccountComplete implements Action {
  readonly type = LOAD_CUSTOMER_ACCOUNT_COMPLETE;
  constructor(public payload?: any) {}
}

export type All
  = ConfigureCustomerAccount
  | ShowCustomerAccount
  | HideCustomerAccount
  | LoadCustomerAccountRequest
  | LoadCustomerAccountSuccess
  | LoadCustomerAccountFailure
  | LoadCustomerAccountComplete;