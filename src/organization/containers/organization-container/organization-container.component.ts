import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Onboarding } from '../../../organization-store/onboarding';
import { OnboardingFacade } from '../../../organization-store/onboarding/onboarding.facade';
import * as OnboardingActions from '../../../organization-store/onboarding/onboarding.actions';

@Component({
  selector: 'organization-container',
  templateUrl: './organization-container.component.html',
  styleUrls: ['./organization-container.component.scss']
})
export class OrganizationContainerComponent implements OnInit {
  
  // organization$: Observable<any>;
  // getOnboardingIsActivated$ : Observable<any>;
  
  onboarding$ = this.onboardingService.onboarding$;
  onboardingIsActivated$ = this.onboardingService.onboardingIsActivated$;
  onboardingIsVisible$ = this.onboardingService.onboardingIsVisible$;
  
  constructor(private store: Store<any>, private onboardingService: OnboardingFacade) { 
  }
  
  // constructor(private store: Store<any>) { 
  // }

  ngOnInit() {
  }

  // activateOnboarding() {
  //   this.store.dispatch(new onboarding.ConfigureOnboarding({ activated : true }));
  // }
  
  activateOnboarding() {
    this.onboardingService.activateOnboarding();
  }
  
  deactivateOnboarding() {
    this.onboardingService.deactivateOnboarding();
  }

}
