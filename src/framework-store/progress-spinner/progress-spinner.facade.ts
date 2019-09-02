import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

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

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { FrameworkStoreState } from '../framework-store.state';

import { ProgressSpinner } from './progress-spinner.model';
import * as ProgressSpinnerActions from './progress-spinner.actions';
type Action = ProgressSpinnerActions.All;

export const selectFrameworkStoreState = createFeatureSelector<FrameworkStoreState>('framework-store');

export const selectProgressSpinnerState = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressSpinner
);

export const selectProgressSpinnerIsActivated = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressSpinner.activated
);

export const selectProgressSpinnerIsVisible = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressSpinner.visible
);

export const selectProgressSpinnerColor = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressSpinner.color
);

export const selectProgressSpinnerMode = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressSpinner.mode
);

export const selectProgressSpinnerValue = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressSpinner.value
);

export const selectProgressSpinnerStrokeWidth = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressSpinner.strokeWidth
);

export const selectProgressSpinnerDiameter = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressSpinner.diameter
);

@Injectable()
export class ProgressSpinnerFacade {
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  progressSpinner$ = this.store.select(selectProgressSpinnerState);
  progressSpinnerIsActivated$ = this.store.select(selectProgressSpinnerIsActivated);
  progressSpinnerIsVisible$ = this.store.select(selectProgressSpinnerIsVisible);
  progressSpinnerColor$ = this.store.select(selectProgressSpinnerColor);
  progressSpinnerMode$ = this.store.select(selectProgressSpinnerMode);
  progressSpinnerValue$ = this.store.select(selectProgressSpinnerValue);
  progressSpinnerStrokeWidth$ = this.store.select(selectProgressSpinnerStrokeWidth);
  progressSpinnerDiameter$ = this.store.select(selectProgressSpinnerDiameter);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  configureProgressSpinner(progressSpinnerConfig) {
    this.store.dispatch(new ProgressSpinnerActions.ConfigureProgressSpinner(progressSpinnerConfig));
    return this.progressSpinner$;
  }
  
  activateProgressSpinner() {
    this.store.dispatch(new ProgressSpinnerActions.ConfigureProgressSpinner({ activated: true }));
    return this.progressSpinner$;
  }
  
  deactivateProgressSpinner() {
    this.store.dispatch(new ProgressSpinnerActions.ConfigureProgressSpinner({ activated: false }));
    return this.progressSpinner$;
  }
  
  showProgressSpinner() {
    this.store.dispatch(new ProgressSpinnerActions.ShowProgressSpinner({ visible: true }));
    return this.progressSpinner$;
  }
  
  hideProgressSpinner() {
    this.store.dispatch(new ProgressSpinnerActions.HideProgressSpinner({ visible: false }));
  }
  
  stepProgressSpinnerValue(value) {
    this.store.dispatch(new ProgressSpinnerActions.StepProgressSpinnerValue({ value: value }));
    return this.progressSpinner$;
  }
  
  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store<FrameworkStoreState>,
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase,
    private afStore: AngularFirestore
  ) {}
  
  // ************************************************************
  // Internal Methods
  // ************************************************************
}