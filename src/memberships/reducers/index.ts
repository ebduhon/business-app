
// start version 1
// import { ActionReducerMap } from '@ngrx/store';
// import { membershipReducer } from './membership.reducer';
// export const reducers: ActionReducerMap<any> = {
//   membership: membershipReducer
// };
// end version 1


// start version 2
// import { ActionReducerMap } from '@ngrx/store';
// import * as fromMembership from './membership.reducer';

// export interface State {
//   membership: fromMembership.State;
// }

// export const reducers: ActionReducerMap<State> = {
//   membership: fromMembership.membershipReducer
// };
// end version 2

// start version 3
// import { ActionReducerMap } from '@ngrx/store';
// import { membershipReducer } from './membership.reducer';
// export const reducers: ActionReducerMap<any> = {
//   memberships: membershipReducer
// };
// end version 3

// start version 4
// import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
// import * as fromMembership from './membership.reducer';

// export interface State {
//   membership: fromMembership.State;
// }

// export const reducers: ActionReducerMap<State> = {
//   membership: fromMembership.membershipReducer
// };

// export const selectMembershipState = createFeatureSelector<fromMembership.State>('membership');

// export const {
//   // select the array of membership ids
//   selectIds: selectMembershipIds,
  
//   // select the dictionary of membership entities
//   selectEntities: selectMembershipEntities,
  
//   // select the array of memberships
//   selectAll: selectAllMemberships,
  
//   // select the total membership count
//   selectTotal: selectMembershipTotal
// } = fromMembership.adapter.getSelectors(selectMembershipState);

// export const selectCurrentMembershipId = createSelector(selectMembershipState, fromMembership.getSelectedMembershipId);
// export const selectCurrentMembership = createSelector(
//   selectMembershipEntities,
//   selectCurrentMembershipId,
//   (membershipEntities, membershipId) => membershipEntities[membershipId]
// );

// end version 4

// start version 5
// import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
// import * as fromMembership from './membership.reducer';

// export interface State {
//   memberships: fromMembership.State;
// }

// export const reducers: ActionReducerMap<State> = {
//   memberships: fromMembership.membershipReducer
// };

// export const selectMembershipState = createFeatureSelector<fromMembership.State>('memberships');

// export const {
//   // select the array of membership ids
//   selectIds: selectMembershipIds,
  
//   // select the dictionary of membership entities
//   selectEntities: selectMembershipEntities,
  
//   // select the array of memberships
//   selectAll: selectAllMemberships,
  
//   // select the total membership count
//   selectTotal: selectMembershipTotal
// } = fromMembership.adapter.getSelectors(selectMembershipState);

// export const selectCurrentMembershipId = createSelector(selectMembershipState, fromMembership.getSelectedMembershipId);
// export const selectCurrentMembership = createSelector(
//   selectMembershipEntities,
//   selectCurrentMembershipId,
//   (membershipEntities, membershipId) => membershipEntities[membershipId]
// );

// end version 5


// start version 6

// import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
// import * as fromMembership from './membership.reducer';

// export interface State {
//   memberships: fromMembership.State;
// }

// export const reducers: ActionReducerMap<State> = {
//   memberships: fromMembership.membershipReducer
// };

// export const selectMembershipState = createFeatureSelector<fromMembership.State>('memberships');

// export const {
//   // // select the array of membership ids
//   // selectIds: selectMembershipIds,
  
//   // // select the dictionary of membership entities
//   // selectEntities: selectMembershipEntities,
  
//   // // select the array of memberships
//   // selectAll: selectAllMemberships,
  
//   // // select the total membership count
//   // selectTotal: selectMembershipTotal
//   selectIds,
//   selectEntities,
//   selectAll,
//   selectTotal
// } = fromMembership.membershipAdapter.getSelectors(selectMembershipState);

// end version 6

// start version 7
// import { createSelector, createFeatureSelector } from '@ngrx/store';
// import * as fromMembership from './membership.reducer';
// import * as fromRoot from '../../app/state/root';

// export interface MembershipsState {
//   memberships: fromMembership.State;
// }

// export interface State extends fromRoot.State {
//   'memberships': MembershipsState
// }

// export const reducers = {
//   memberships: fromMembership.membershipReducer
// };

// export const getMembershipsState = createFeatureSelector<MembershipsState>('memberships');

// /**
// * Every reducer module exports selector functions; 
// * however, child reducers have no knowledge of the overall state tree.
// * To make them usable, we need to make new selectors that wrap them.
// * 
// * The createSelector function creates very efficient selectors that are memoized and
// * only recompute when arguments change.
// * The created selectors can also be composed together to select different pieces of state.
// */
// export const getMembershipEntitiesState = createSelector(
//   getMembershipsState,
//   state => state.memberships
// );

// export const {
//   // // select the array of membership ids
//   // selectIds: selectMembershipIds,
  
//   // // select the dictionary of membership entities
//   // selectEntities: selectMembershipEntities,
  
//   // // select the array of memberships
//   // selectAll: selectAllMemberships,
  
//   // // select the total membership count
//   // selectTotal: selectMembershipTotal

//   selectIds,
//   selectEntities,
//   selectAll,
//   selectTotal
// } = fromMembership.membershipAdapter.getSelectors(getMembershipsState);
// end version 7

// start version 8

// import { createSelector, createFeatureSelector } from '@ngrx/store';
// import * as fromMembership from './membership.reducer';
// import * as fromRoot from '../../app/state/root';

// export interface MembershipsState {
//   memberships: fromMembership.State;
// }

// export interface State extends fromRoot.State {
//   'memberships': MembershipsState
// }

// export const reducers = {
//   memberships: fromMembership.membershipReducer
// };

// export const getMembershipsState = createFeatureSelector<MembershipsState>('memberships');

// /**
// * Every reducer module exports selector functions; 
// * however, child reducers have no knowledge of the overall state tree.
// * To make them usable, we need to make new selectors that wrap them.
// * 
// * The createSelector function creates very efficient selectors that are memoized and
// * only recompute when arguments change.
// * The created selectors can also be composed together to select different pieces of state.
// */
// export const getMembershipEntitiesState = createSelector(
//   getMembershipsState,
//   state => state.memberships
// );

// export const getSelectedMembershipId = createSelector(
//   getMembershipEntitiesState,
//   fromMembership.getSelectedId
// );

// export const {
//   // select the array of membership ids
//   selectIds: getMembershipIds,
  
//   // select the dictionary of membership entities
//   selectEntities: getMembershipEntities,
  
//   // select the array of memberships
//   selectAll: getAllMemberships,
  
//   // select the total membership count
//   selectTotal: getTotalMemberships
// } = fromMembership.membershipAdapter.getSelectors(getMembershipsState);

// end version 8


// start version 9

import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMembership from './membership.reducer';
import * as fromRoot from '../../app/state/root';

export interface MembershipsState {
  memberships: fromMembership.State;
}

export interface State extends fromRoot.State {
  'memberships': MembershipsState
}

export const reducers = {
  memberships: fromMembership.membershipReducer
};

export const getMembershipsState = createFeatureSelector<MembershipsState>('memberships');

/**
 * Every reducer module exports selector functions; 
 * however, child reducers have no knowledge of the overall state tree.
 * To make them usable, we need to make new selectors that wrap them.
 * 
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change.
 * The created selectors can also be composed together to select different pieces of state.
 */
export const getMembershipEntitiesState = createSelector(
  getMembershipsState,
  state => state.memberships
);

export const getSelectedMembershipId = createSelector(
  getMembershipEntitiesState,
  fromMembership.getSelectedId
);

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
export const {
  // select the array of membership ids
  selectIds: getMembershipIds,
  
  // select the dictionary of membership entities
  selectEntities: getMembershipEntities,
  
  // select the array of memberships
  selectAll: getAllMemberships,
  
  // select the total membership count
  selectTotal: getTotalMemberships
} = fromMembership.membershipAdapter.getSelectors(getMembershipEntitiesState);

export const getSelectedMembership = createSelector(
  getMembershipEntities,
  getSelectedMembershipId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

// end version 9