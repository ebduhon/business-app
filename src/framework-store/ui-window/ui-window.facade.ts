import { Injectable } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { defer } from 'rxjs/observable/defer';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { FrameworkStoreState } from '../framework-store.state';
import { UiWindow } from './ui-window.model';
import * as UiWindowActions from './ui-window.actions';
type Action = UiWindowActions.All;

export const selectFrameworkStoreState = createFeatureSelector<FrameworkStoreState>('framework-store');

export const selectUiWindowState = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.uiWindow
);

export const selectUiWindowHeight = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.uiWindow.height
);

export const selectUiWindowWidth = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.uiWindow.width
);

@Injectable()
export class UiWindowFacade {
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  uiWindow$ = this.store.select(selectUiWindowState);
  uiWindowHeight$ = this.store.select(selectUiWindowHeight);
  uiWindowWidth$ = this.store.select(selectUiWindowWidth);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  resizeUiWindow(event) {
    this.store.dispatch(new UiWindowActions.ResizeUiWindow({ height: event.target.innerHeight, width: event.target.innerWidth }))
  }
  
  constructor(
    private actions$: Actions,
    private store: Store<FrameworkStoreState>,
  ) {}
  
  // ************************************************************
  // Internal Methods
  // ************************************************************
}