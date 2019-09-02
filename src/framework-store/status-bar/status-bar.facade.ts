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

import { StatusBar } from './status-bar.model';
import * as StatusBarActions from './status-bar.actions';
type Action = StatusBarActions.All;

export const selectFrameworkStoreState = createFeatureSelector<FrameworkStoreState>('framework-store');

export const selectStatusBarState = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.statusBar
);

export const selectStatusBarIsActivated = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.loadingSpinner.activated
);

export const selectStatusBarIsVisible = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.loadingSpinner.visible
);

@Injectable()
export class StatusBarFacade {

  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  statusBar$ = this.store.select(selectStatusBarState);
  statusBarIsActivated$ = this.store.select(selectStatusBarIsActivated);
  statusBarIsVisible$ = this.store.select(selectStatusBarIsVisible);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  //TODO: related to framework user-interface configuration options
  configureStatusBar(statusBarConfig) {
    this.store.dispatch(new StatusBarActions.ConfigureStatusBar(statusBarConfig));
    return this.statusBar$;
  }
  
  //TODO: related to framework user-interface configuration options
  activateStatusBar() {
    this.store.dispatch(new StatusBarActions.ConfigureStatusBar({ activated: true }));
    return this.statusBar$;
  }
  
  //TODO: related to framework user-interface configuration options
  deactivateStatusBar() {
    this.store.dispatch(new StatusBarActions.ConfigureStatusBar({ activated: false }));
    return this.statusBar$;
  }
  
  //TODO: related to framework user-interface configuration options
  showStatusBar() {
    this.store.dispatch(new StatusBarActions.ShowStatusBar({ visible: true }));
    return this.statusBar$;
  }
  
  //TODO: related to framework user-interface configuration options
  hideStatusBar() {
    this.store.dispatch(new StatusBarActions.HideStatusBar({ visible: false }));
    return this.statusBar$;
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