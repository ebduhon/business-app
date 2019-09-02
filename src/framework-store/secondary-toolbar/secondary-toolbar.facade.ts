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

import { SecondaryToolbar } from './secondary-toolbar.model';
import * as SecondaryToolbarActions from './secondary-toolbar.actions';
type Action = SecondaryToolbarActions.All;

export const selectFrameworkStoreState = createFeatureSelector<FrameworkStoreState>('framework-store');

export const selectSecondaryToolbarState = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.secondaryToolbar
);

export const selectSecondaryToolbarIsActivated = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.secondaryToolbar.activated
);

export const selectSecondaryToolbarIsVisible = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.secondaryToolbar.visible
);

@Injectable()
export class SecondaryToolbarFacade {
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  secondaryToolbar$ = this.store.select(selectSecondaryToolbarState);
  secondaryToolbarIsActivated$ = this.store.select(selectSecondaryToolbarIsActivated);
  secondaryToolbarIsVisible$ = this.store.select(selectSecondaryToolbarIsVisible);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  //TODO: related to framework user-interface configuration options
  configureSecondaryToolbar(secondaryToolbarConfig) {
    this.store.dispatch(new SecondaryToolbarActions.ConfigureSecondaryToolbar(secondaryToolbarConfig));
    return this.secondaryToolbar$;
  }
  
  
  //TODO: related to framework user-interface configuration options
  activateSecondaryToolbar() {
    this.store.dispatch(new SecondaryToolbarActions.ConfigureSecondaryToolbar({ activated: true }));
    return this.secondaryToolbar$;
  }
  
  //TODO: related to framework user-interface configuration options
  deactivateSecondaryToolbar() {
    this.store.dispatch(new SecondaryToolbarActions.ConfigureSecondaryToolbar({ activated: false }));
    return this.secondaryToolbar$;
  }
  
  //TODO: related to framework user-interface configuration options
  showSecondaryToolbar() {
    this.store.dispatch(new SecondaryToolbarActions.ShowSecondaryToolbar({ visible: true }));
    return this.secondaryToolbar$;
  }
  
  //TODO: related to framework user-interface configuration options
  hideSecondaryToolbar() {
    this.store.dispatch(new SecondaryToolbarActions.HideSecondaryToolbar({ visible: false }));
    return this.secondaryToolbar$;
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