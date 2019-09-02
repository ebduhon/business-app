import { Action } from '@ngrx/store';
import { Membership } from '../models/membership.model';

export const QUERY = '[Membership] query memberships';

//Note: that 'added' | 'modified' | 'removed' are lowercase intentionally to match the format of the DocumentChangeType via AngularFire2
export const ADDED = '[Membership] added';
export const MODIFIED = '[Membership] modified';
export const REMOVED = '[Membership] removed';

export const UPDATE = '[Membership] update';
export const SUCCESS = '[Membership] success';

//TODO: LOAD_MEMBERSHIPS
//TODO: ADD_MEMBERSHIP
//TODO: ADD_MEMBERSHIPS
//TODO: UPDATE_MEMBERSHIP
//TODO: UPDATE_MEMBERSHIPS
//TODO: DELETE_MEMBERSHIP
//TODO: DELETE_MEMBERSHIPS
//TODO: CLEAR_MEMBERSHIPS

// Initial query
export class Query implements Action {
  readonly type = QUERY;
  constructor() {}
}

// AngularFire2 StateChanges
export class Added implements Action {
  readonly type = ADDED;
  constructor(public payload: Membership) {}
}

export class Modified implements Action {
  readonly type = MODIFIED;
  constructor(public payload: Membership) {}
}

export class Removed implements Action {
  readonly type = REMOVED;
  constructor(public payload: Membership) {}
}

// Run a Firestore Update
export class Update implements Action {
  readonly type = UPDATE;
  constructor(
    public id: string,
    public changes: Partial<Membership>
  ) {}
}

export class Success implements Action {
  readonly type = SUCCESS;
  constructor() {}
}

export type All =
  Query |
  Added |
  Modified |
  Removed |
  Update |
  Success;