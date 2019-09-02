import { createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
// import { createFeatureSelector } from '@ngrx/store'; //TODO: move to reducers/index.ts
import { Membership } from '../models/membership.model';
import * as MembershipActions from '../actions/membership.actions';

/** https://github.com/ngrx/platform/blob/master/docs/entity/adapter.md */
/** https://github.com/ngrx/platform/blob/master/docs/entity/adapter.md#adapter-collection-methods */

// AngularFirebase tutorial implementation
// export const membershipAdapter = createEntityAdapter<Membership>();
// export interface State extends EntityState<Membership> { }

// export const initialState: State = membershipAdapter.getInitialState();

export function membershipReducer(state: State = initialState, action: MembershipActions.All): State {
  
  switch (action.type) {
    
    case MembershipActions.ADDED:
      return membershipAdapter.addOne(action.payload, state);
    
    case MembershipActions.MODIFIED:
      return membershipAdapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state);
    
    case MembershipActions.REMOVED:
      return membershipAdapter.removeOne(action.payload.id, state);
    
    default:
      return state;
  }
}

// Create the default selectors //TODO: move to reducers/index.ts

// export const getMembershipsState = createFeatureSelector<State>('memberships'); //TODO: review store state name as `memberships` vs. `membership` and corresponding afs or afdb path

// export const {
//   selectIds,
//   selectEntities,
//   selectAll,
//   selectTotal
// } = membershipAdapter.getSelectors(getMembershipsState);



// start version 8 reference reducers/index.ts 


// export interface State extends EntityState<Membership> {
//   // additional entities state properties
//   selectedMembershipId: number | null;
// }

// export const membershipAdapter: EntityAdapter<Membership> = createEntityAdapter<Membership>({
//   selectId: (membership: Membership) => membership.id,
//   sortComparer: false
// });


// export const initialState: State = membershipAdapter.getInitialState({
//   // additional entity state properties
//   selectedMembershipId: null
// });

// /**
// * Because the data structure is defined within the reducer it is optimal to 
// * locate our selector functions at this level.
// * If store is to be thought of as a database, and reducers the tables,
// * selectors can be considered the queries into said database.
// * Remember to keep you selectors small and focused
// * so they can be combined and composed to fit each particular use-case.
// */
// export const getSelectedId = (state: State) => state.selectedMembershipId;

// end version 8 reference reducers/index.ts 

// start version 9 reference reducers/index.ts 

/**
* @ngrx/entity provides a predefined interface for handling
* a structured dictionary of records. This interface
* includes an array of ids, and a dictionary of the provided
* model type by id. This interface is extended to include
* any additional interface properties.
*/
export interface State extends EntityState<Membership> {
  // additional entities state properties
  selectedMembershipId: number | null;
}

/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare */

export function sortByName(a: Membership, b: Membership): number {
  return a.name.localeCompare(b.name);
}

/**
* createEntityAdapter creates many an object of helper
* functions for single or multiple operations
* against the dictionary of records. The configuration
* object takes a record id selector function and
* a sortComparer option which is set to a compare
* function if the records are to be sorted.
*/
export const membershipAdapter: EntityAdapter<Membership> = createEntityAdapter<Membership>({
  selectId: (membership: Membership) => membership.id,
  sortComparer: sortByName
});

/**
* getInitialState returns the default initial state
* for the generated entity state. Initial state
* additional properties can also be defined.
*/
export const initialState: State = membershipAdapter.getInitialState({
  // additional entity state properties
  selectedMembershipId: null
});

/**
* Because the data structure is defined within the reducer it is optimal to 
* locate our selector functions at this level.
* If store is to be thought of as a database, and reducers the tables,
* selectors can be considered the queries into said database.
* Remember to keep you selectors small and focused
* so they can be combined and composed to fit each particular use-case.
*/
export const getSelectedId = (state: State) => state.selectedMembershipId;

// end version 9 reference reducers/index.ts 