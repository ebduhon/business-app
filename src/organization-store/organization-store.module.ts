import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { OnboardingFacade } from './onboarding/onboarding.facade';
import { getOrganizationReducersProvider, ORGANIZATION_REDUCER_TOKEN } from './get-organization-reducers.provider';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('organization', ORGANIZATION_REDUCER_TOKEN),
    EffectsModule.forFeature([
      OnboardingFacade
    ])
  ],
  providers: [
    getOrganizationReducersProvider,
    OnboardingFacade
  ]
})
export class OrganizationStoreModule {}