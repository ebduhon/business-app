import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationContainerComponent } from './containers/organization-container/organization-container.component';
import { OrganizationHarnessComponent } from './containers/organization-harness/organization-harness.component';
import { OnboardingHarnessComponent } from './containers/onboarding-harness/onboarding-harness.component';
import { OrganizationFormComponent } from './components/organization-form/organization-form.component';
import { OnboardingFormComponent } from './components/onboarding-form/onboarding-form.component';

import { OrganizationAuthGuardService } from './services/organization-auth-guard.service';

const organizationRoutes: Routes = [
  {
    path: '',
    component: OrganizationContainerComponent, canActivate: [ OrganizationAuthGuardService ],
    children: [
      { path: '', canActivateChild: [ OrganizationAuthGuardService ],
        children: [
          { path: '', redirectTo: 'organization-dashboard', pathMatch: 'full' },
          { path: 'organization-dashboard', component: OrganizationHarnessComponent, data: { title: 'Organization'} },
          { path: 'onboarding', component: OnboardingHarnessComponent, data: { title: 'Onboarding' } }, 
        ] },
    ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(organizationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrganizationRoutingModule {}