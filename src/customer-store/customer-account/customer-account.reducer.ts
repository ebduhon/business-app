import { CustomerStoreState } from '../customer-store.state';

import * as CustomerAccountActions from './customer-account.actions';
import { ICustomerAccount, CustomerAccount } from './customer-account.model';
export type Action = CustomerAccountActions.All;

const defaultCustomerAccountState = new CustomerAccount(false, false);

export interface CustomerAccountState extends ICustomerAccount {
  activated?: boolean;
  visible?: boolean;
}

export function customerAccountReducer(state: CustomerAccountState = defaultCustomerAccountState, action: Action): CustomerAccountState {
  switch (action.type) {
    case CustomerAccountActions.CONFIGURE_CUSTOMER_ACCOUNT:
      return { ...state, ...action.payload };
    
    case CustomerAccountActions.SHOW_CUSTOMER_ACCOUNT:
      return { ...state, ...action.payload };
    
    case CustomerAccountActions.HIDE_CUSTOMER_ACCOUNT:
      return { ...state, ...action.payload };
    
    case CustomerAccountActions.LOAD_CUSTOMER_ACCOUNT_REQUEST:
      return { ...state, ...action.payload };
    
    case CustomerAccountActions.LOAD_CUSTOMER_ACCOUNT_SUCCESS:
      return { ...state, ...action.payload };
    
    case CustomerAccountActions.LOAD_CUSTOMER_ACCOUNT_FAILURE:
      return { ...state, ...action.payload };
    
    case CustomerAccountActions.LOAD_CUSTOMER_ACCOUNT_COMPLETE:
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}