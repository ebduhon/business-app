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

import { Tabnav } from './tabnav.model';
import * as TabnavActions from './tabnav.actions';
type Action = TabnavActions.All;

export const selectFrameworkStoreState = createFeatureSelector<FrameworkStoreState>('framework-store');

export const selectTabnavState = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.tabnav
);

export const selectTabnavIsActivated = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.tabnav.activated
);

export const selectTabnavIsVisible = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.tabnav.visible
);

export const selectTabnavTabs = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.tabnav.tabs
);

@Injectable()
export class TabnavFacade {

  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  tabnav$ = this.store.select(selectTabnavState);
  tabnavIsActivated$ = this.store.select(selectTabnavIsActivated);
  tabnavIsVisible$ = this.store.select(selectTabnavIsVisible);
  tabnavTabs$ = this.store.select(selectTabnavTabs);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  //TODO: related to framework user-interface configuration options
  configureTabnav(tabnavConfig) {
    this.store.dispatch(new TabnavActions.ConfigureTabnav(tabnavConfig));
    return this.tabnav$;
  }
  
  //TODO: related to framework user-interface configuration options
  activateTabnav() {
    this.store.dispatch(new TabnavActions.ConfigureTabnav({ activated: true }));
    return this.tabnav$;
  }
  
  //TODO: related to framework user-interface configuration options
  deactivateTabnav() {
    this.store.dispatch(new TabnavActions.ConfigureTabnav({ activated: false }));
    return this.tabnav$;
  }  
  
  showTabnav() {
    this.store.dispatch(new TabnavActions.ShowTabnav({ visible: true }));
    return this.tabnav$;
  }
  
  hideTabnav() {
    this.store.dispatch(new TabnavActions.HideTabnav({ visible: false }));
    return this.tabnav$;
  }
  
  loadTabnav() {
    this.store.dispatch(new TabnavActions.LoadTabnav());
    return this.tabnav$;
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