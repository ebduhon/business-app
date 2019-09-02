import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Account } from './account.model';
import * as AccountActions from './account.actions';

export interface State extends EntityState<Account> {
  // additional entities state properties
  selectedAccountId: number | null;
}

export const adapter: EntityAdapter<Account> = createEntityAdapter<Account>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedAccountId: null
});

export function reducer(
  state = initialState,
  action: AccountActions.All
): State {
  switch (action.type) {
    
    case AccountActions.ADD_ACCOUNT: {
      return adapter.addOne(action.payload.account, state);
    }
    
    case AccountActions.ADD_ACCOUNTS: {
      return adapter.addMany(action.payload.accounts, state);
    }
    
    case AccountActions.UPDATE_ACCOUNT: {
      return adapter.updateOne(action.payload.account, state);
    }
    
    case AccountActions.UPDATE_ACCOUNTS: {
      return adapter.updateMany(action.payload.accounts, state);
    }
    
    case AccountActions.DELETE_ACCOUNT: {
      return adapter.removeOne(action.payload.id, state);
    }
    
    case AccountActions.DELETE_ACCOUNTS: {
      return adapter.removeMany(action.payload.ids, state);
    }
    
    case AccountActions.LOAD_ACCOUNTS: {
      return adapter.addAll(action.payload.accounts, state);
    }
    
    case AccountActions.CLEAR_ACCOUNTS: {
      return adapter.removeAll({ ...state, selectedAccountId: null });
    }
    
    default: {
      return state;
    }
  }
}

export const getSelectedAccountId = (state: State) => state.selectedAccountId;