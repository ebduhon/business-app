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

import { LoadingSpinner } from './loading-spinner.model';
import * as LoadingSpinnerActions from './loading-spinner.actions';
type Action = LoadingSpinnerActions.All;

export const selectFrameworkStoreState = createFeatureSelector<FrameworkStoreState>('framework-store');

export const selectLoadingSpinnerState = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.loadingSpinner
);

export const selectLoadingSpinnerIsActivated = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.loadingSpinner.activated
);

export const selectLoadingSpinnerIsVisible = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.loadingSpinner.visible
);

@Injectable()
export class LoadingSpinnerFacade {
      
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  loadingSpinner$ = this.store.select(selectLoadingSpinnerState);
  loadingSpinnerIsActivated$ = this.store.select(selectLoadingSpinnerIsActivated);
  loadingSpinnerIsVisible$ = this.store.select(selectLoadingSpinnerIsVisible);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  //TODO: related to framework user-interface configuration options
  configureLoadingSpinner(loadingSpinnerConfig) {
    this.store.dispatch(new LoadingSpinnerActions.ConfigureLoadingSpinner(loadingSpinnerConfig));
    return this.loadingSpinner$;
  }
  
  //TODO: related to framework user-interface configuration options
  activateLoadingSpinner() {
    this.store.dispatch(new LoadingSpinnerActions.ConfigureLoadingSpinner({ activated: true }));
    return this.loadingSpinner$;
  }
  
  //TODO: related to framework user-interface configuration options
  deactivateLoadingSpinner() {
    this.store.dispatch(new LoadingSpinnerActions.ConfigureLoadingSpinner({ activated: false }));
    return this.loadingSpinner$;
  }
  
  openLoadingSpinner() {
    this.store.dispatch(new LoadingSpinnerActions.OpenLoadingSpinner({ visible: true }));
    return this.loadingSpinner$;
  }
  
  closeLoadingSpinner() {
    this.store.dispatch(new LoadingSpinnerActions.CloseLoadingSpinner({ visible: false }));
    return this.loadingSpinner$;
  }
  
  //TODO: related to ComponentFactoryResolver
  // resolveLoadingSpinner() {}
  
  //TODO: related to ComponentFactoryResolver
  // registerLoadingSpinner() {}
  
  
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