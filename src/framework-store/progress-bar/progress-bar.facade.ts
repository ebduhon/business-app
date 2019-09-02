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

import { ProgressBar } from './progress-bar.model';
import * as ProgressBarActions from './progress-bar.actions';
type Action = ProgressBarActions.All;

export const selectFrameworkStoreState = createFeatureSelector<FrameworkStoreState>('framework-store');

export const selectProgressBarState = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressBar
);

export const selectProgressBarIsActivated = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressBar.activated
);

export const selectProgressBarIsVisible = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressBar.visible
);

export const selectProgressBarColor = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressBar.color
);

export const selectProgressBarMode = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressBar.mode
);

export const selectProgressBarValue = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressBar.value
);

export const selectProgressBarBufferValue = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.progressBar.bufferValue
);

@Injectable()
export class ProgressBarFacade {
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  progressBar$ = this.store.select(selectProgressBarState);
  progressBarIsActivated$ = this.store.select(selectProgressBarIsActivated);
  progressBarIsVisible$ = this.store.select(selectProgressBarIsVisible);
  progressBarColor$ = this.store.select(selectProgressBarColor);
  progressBarMode$ = this.store.select(selectProgressBarMode);
  progressBarValue$ = this.store.select(selectProgressBarValue);
  progressBarBufferValue$ = this.store.select(selectProgressBarBufferValue);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  
  configureProgressBar(progressBarConfig) {
    this.store.dispatch(new ProgressBarActions.ConfigureProgressBar(progressBarConfig));
    return this.progressBar$;
  }
  
  activateProgressBar() {
    this.store.dispatch(new ProgressBarActions.ConfigureProgressBar({ activated: true }));
    return this.progressBar$;
  }
  
  deactivateProgressBar() {
    this.store.dispatch(new ProgressBarActions.ConfigureProgressBar({ activated: false }));
    return this.progressBar$;
  }
  
  showProgressBar() {
    this.store.dispatch(new ProgressBarActions.ShowProgressBar({ visible: true }));
    return this.progressBar$;
  }
  
  hideProgressBar() {
    this.store.dispatch(new ProgressBarActions.HideProgressBar({ visible: false }));
    return this.progressBar$;
  }
  
  stepProgressBarValue(value) {
    this.store.dispatch(new ProgressBarActions.StepProgressBarValue({ value: value }));
    return this.progressBar$;
  }
  
  stepProgressBarBuffer(bufferValue) {
    this.store.dispatch(new ProgressBarActions.StepProgressBarBuffer({ bufferValue: bufferValue }));
    return this.progressBar$;
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