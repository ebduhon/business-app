import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
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

import { UiConfig } from './ui-config.model';
import * as UiConfigActions from './ui-config.actions';
type Action = UiConfigActions.All;

export const selectFrameworkStoreState = createFeatureSelector<FrameworkStoreState>('framework-store');

export const selectUiConfigState = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.uiConfig
);

export const selectUiConfigVm = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.uiConfig.vm
);

export const selectUiConfigVmDefinitions = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.uiConfig.vmDefinitions
);

@Injectable()
export class UiConfigFacade {
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  uiConfig$ = this.store.select(selectUiConfigState);
  uiConfigVm$ = this.store.select(selectUiConfigVm);
  uiConfigVmDefinitions$ = this.store.select(selectUiConfigVmDefinitions);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  loadUiConfig() {
    this.store.dispatch(new UiConfigActions.LoadUiConfigRequest());
    return this.uiConfig$;
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