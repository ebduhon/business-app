import * as fromAccount from './account/account.reducer';

export interface AdministrationState {
  account: fromAccount.State;
}
