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

import { Sidenav } from './sidenav.model';
import * as SidenavActions from './sidenav.actions';
type Action = SidenavActions.All;

export const selectFrameworkStoreState = createFeatureSelector<FrameworkStoreState>('framework-store');

export const selectSidenavState = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.sidenav
);

export const selectSidenavIsActivated = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.sidenav.activated
);

export const selectSidenavIsVisible = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.sidenav.visible
);

export const selectSidenavMode = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.sidenav.mode
);

export const selectSidenavIsOpened = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.sidenav.opened
);

export const selectSidenavIsCovered = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.sidenav.covered
);

export const selectSidenavIsFixed = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.sidenav.fixed
);

export const selectSidenavIsFixedTopGap = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.sidenav.fixedTopGap
);

export const selectSidenavIsFixedBottomGap = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.sidenav.fixedBottomGap
);

@Injectable()
export class SidenavFacade {

  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  sidenav$ = this.store.select(selectSidenavState);
  sidenavIsActivated$ = this.store.select(selectSidenavIsActivated);
  sidenavIsVisible$ = this.store.select(selectSidenavIsVisible);
  sidenavMode$ = this.store.select(selectSidenavMode);
  sidenavIsOpened$ = this.store.select(selectSidenavIsOpened);
  sidenavIsCovered$ = this.store.select(selectSidenavIsCovered);
  sidenavIsFixed$ = this.store.select(selectSidenavIsFixed);
  sidenavIsFixedTopGap$ = this.store.select(selectSidenavIsFixedTopGap);
  sidenavIsFixedBottomGap$ = this.store.select(selectSidenavIsFixedBottomGap);
  
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  //TODO: related to ComponentFactoryResolver
  // resolveSidenav() {}
  
  //TODO: related to ComponentFactoryResolver
  // registerSidenav() {}
  
  //TODO: related to framework user-interface configuration options
  configureSidenav(sidenavConfig) {
    this.store.dispatch(new SidenavActions.ConfigureSidenav(sidenavConfig));
    return this.sidenav$;
  }
  
  //TODO: related to framework user-interface configuration options
  activateSidenav() {
    this.store.dispatch(new SidenavActions.ConfigureSidenav({ activated: true }));
    return this.sidenav$;
  }
  
  //TODO: related to framework user-interface configuration options
  deactivateSidenav() {
    this.store.dispatch(new SidenavActions.ConfigureSidenav({ activated: false }));
    return this.sidenav$;
  }
  
  //TODO: related to framework user-interface configuration options 
  showSidenav() {
    this.store.dispatch(new SidenavActions.ShowSidenav({ visible: true }));
    return this.sidenav$;
  }
  
  //TODO: related to framework user-interface configuration options
  hideSidenav() {
    this.store.dispatch(new SidenavActions.HideSidenav({ visible: false }));
    return this.sidenav$;
  }
  
  //TODO: opened = !opened
  toggleSidenav() {
    
    this.store.dispatch(new SidenavActions.ToggleSidenav());
    return this.sidenav$;
  }
  
  openSidenav() {
    this.store.dispatch(new SidenavActions.OpenSidenav({ opened: true }));
    return this.sidenav$;
  }
  
  closeSidenav() {
    this.store.dispatch(new SidenavActions.CloseSidenav({ opened: false }));
    return this.sidenav$;
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