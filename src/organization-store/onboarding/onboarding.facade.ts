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

import { OrganizationState } from '../organization.state';

import { Onboarding } from './onboarding.model';
import * as OnboardingActions from './onboarding.actions';
type Action = OnboardingActions.All;

export const selectOrganizationState = createFeatureSelector<OrganizationState>('organization');

export const selectOnboardingState = createSelector(
  selectOrganizationState,
  (state: OrganizationState) => state.onboarding
);

export const selectOnboardingIsActivated = createSelector(
  selectOrganizationState,
  (state: OrganizationState) => state.onboarding.activated
);

export const selectOnboardingIsVisible = createSelector(
  selectOrganizationState,
  (state: OrganizationState) => state.onboarding.visible
);

@Injectable()
export class OnboardingFacade {
    
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  onboarding$ = this.store.select(selectOnboardingState);
  onboardingIsActivated$ = this.store.select(selectOnboardingIsActivated);
  onboardingIsVisible$ = this.store.select(selectOnboardingIsVisible);
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  @Effect({ dispatch: false })
  configureOnboarding$: Observable<any> = this.actions$.ofType(OnboardingActions.CONFIGURE_ONBOARDING)
    .map((action: OnboardingActions.ConfigureOnboarding) => action.payload)
    .do((payload) => {
      console.log('effect configureOnboarding$ payload: ', payload);
    });
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  configureOnboarding(onboardingConfig) {
    this.store.dispatch(new OnboardingActions.ConfigureOnboarding(onboardingConfig));
    return this.onboarding$;
  }
  
  activateOnboarding() {
    this.store.dispatch(new OnboardingActions.ConfigureOnboarding({ activated: true }));
    return this.onboarding$;
  }
  
  deactivateOnboarding() {
    this.store.dispatch(new OnboardingActions.ConfigureOnboarding({ activated: false }));
    return this.onboarding$;
  }
  
  showOnboarding() {
    this.store.dispatch(new OnboardingActions.ShowOnboarding({ visible: true }));
    return this.onboarding$;
  }
  
  hideOnboarding() {
    this.store.dispatch(new OnboardingActions.HideOnboarding({ visible: false }));
    return this.onboarding$;
  }
  
  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store<OrganizationState>,
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase,
    private afStore: AngularFirestore
  ) {}
  
  // ************************************************************
  // Internal Methods
  // ************************************************************  
}