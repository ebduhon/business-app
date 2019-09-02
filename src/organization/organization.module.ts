import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrganizationStoreModule } from '../organization-store/organization-store.module';
import { OrganizationRoutingModule } from './organization-routing.module';

import { OrganizationContainerComponent } from './containers/organization-container/organization-container.component';
import { OrganizationHarnessComponent } from './containers/organization-harness/organization-harness.component';
import { OnboardingHarnessComponent } from './containers/onboarding-harness/onboarding-harness.component';
import { OrganizationFormComponent } from './components/organization-form/organization-form.component';
import { OnboardingFormComponent } from './components/onboarding-form/onboarding-form.component';

import { OrganizationAuthGuardService } from './services/organization-auth-guard.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OrganizationStoreModule,
    OrganizationRoutingModule
  ],
  declarations: [
    OrganizationContainerComponent,
    OrganizationHarnessComponent,
    OrganizationFormComponent,
    OnboardingHarnessComponent,
    OnboardingFormComponent
  ],
  providers: [
    OrganizationAuthGuardService
  ],
  entryComponents: [
    OrganizationContainerComponent,
    OrganizationHarnessComponent,
    OrganizationFormComponent
  ]
})
export class OrganizationModule {}