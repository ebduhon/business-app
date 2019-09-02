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

import { DynamicDialog } from './dynamic-dialog.model';
import * as DynamicDialogActions from './dynamic-dialog.actions';
type Action = DynamicDialogActions.All;

export const selectFrameworkStoreState = createFeatureSelector<FrameworkStoreState>('framework-store');

export const selectDynamicDialogState = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.dynamicDialog
);

export const selectDynamicDialogIsActivated = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.dynamicDialog.activated
);

export const selectDynamicDialogIsVisible = createSelector(
  selectFrameworkStoreState,
  (state: FrameworkStoreState) => state.dynamicDialog.visible
);

@Injectable()
export class DynamicDialogFacade {
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  dynamicDialog$ = this.store.select(selectDynamicDialogState);
  dynamicDialogIsActivated$ = this.store.select(selectDynamicDialogIsActivated);
  dynamicDialogIsVisible$ = this.store.select(selectDynamicDialogIsVisible);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  //TODO: related to framework user-interface configuration options
  configureDynamicDialog(dynamicDialogConfig) {
    this.store.dispatch(new DynamicDialogActions.ConfigureDynamicDialog(dynamicDialogConfig));
    return this.dynamicDialog$;
  }
  
  //TODO: related to framework user-interface configuration options
  activateDynamicDialog() {
    this.store.dispatch(new DynamicDialogActions.ConfigureDynamicDialog({ activated: true }));
    return this.dynamicDialog$;
  }
  
  //TODO: related to framework user-interface configuration options
  deactivateDialog() {
    this.store.dispatch(new DynamicDialogActions.ConfigureDynamicDialog({ activated: false }));
    return this.dynamicDialog$;
  }
  
  //TODO: related to framework user-interface configuration options
  showDynamicDialog() {
    this.store.dispatch(new DynamicDialogActions.ShowDynamicDialog({ visible: true }));
    return this.dynamicDialog$;
  }
  
  //TODO: related to framework user-interface configuration options
  hideDynamicDialog() {
    this.store.dispatch(new DynamicDialogActions.HideDynamicDialog({ visible: false }));
    return this.dynamicDialog$;
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