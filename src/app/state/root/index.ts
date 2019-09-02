import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { RouterStateUrl } from '../utils/custom-router-state-serializer';
import * as fromRouter from '@ngrx/router-store';

//TODO: https://github.com/ngrx/platform/blob/master/MIGRATION.md#navigation-actions
//TODO: https://github.com/ngrx/platform/blob/master/MIGRATION.md#ngrxstore-devtools

/**
 * Reference: https://github.com/brandonroberts/ngrx-store-freeze
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development modde to
 * ensure that none of the reducers accidentally mutates the state.
 * This is an implementation of deep-freeze-strict.
 * Reference: https://www.npmjs.com/package/deep-freeze-strict
 */
import { storeFreeze } from 'ngrx-store-freeze';

/** 
 * Reference: https://github.com/btroncone/ngrx-store-logger
 * storeLogger makes available advanced logging for @ngrx/store applications, ported from redux-logger
 */
import { storeLogger, LoggerOptions } from 'ngrx-store-logger';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
 
/**
 * As mentioned, we treat each reducer like a table in a database. This means 
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}


/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer
};

// console.log all actions
// export function storeLogger(reducer: ActionReducer<RootState>): ActionReducer<RootState> {
//   return function(state: RootState, action: any): RootState {
//     console.log('state', state);
//     console.log('action', action);
    
//     return reducer(state, action);
//   };
// }

// export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
//   return function newReducer(state: State, action: any): State {
//     // console.log('state', state);
//     // console.log('action', action);
    
//     console.group(action.type);
//     const nextState = reducer(state, action);
//     console.log(`%c prev state`, `color: #9e9e9e; font-weight: bold`, state);
//     console.log(`%c action`, `color: #03a9f4; font-weight: bold`, action);
//     console.log(`%c next state`, `color: #4caf50; font-weight: bold`, nextState);
//     console.groupEnd();
    
//     return nextState;
//   };
// }

export function logger(reducer: ActionReducer<State>): any {
  const loggerOptions: LoggerOptions = {
    collapsed: true,
    duration: true,
    timestamp: true,
    colors: {
      title: null,
      prevState: () => '#9e9e9e',
      action: () => '',
      nextState: () => '#00e676',
      error: () => '#ff8a80'
    }
  }
  return storeLogger(loggerOptions)(reducer);
}

export function clearState(reducer: ActionReducer<State>): any {
  return function(state: State, action: any): State {
    return reducer(action.type === '[SignOut] Sign Out success' ? undefined : state, action);
  }
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
// export const metaReducers: MetaReducer<State>[] = !environment.production
//   ? [storeLogger, storeFreeze]
//   : [];

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, clearState]
  : [];

