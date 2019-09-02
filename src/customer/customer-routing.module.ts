import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerContainerComponent } from './containers/customer-container/customer-container.component';
import { CustomerHarnessComponent } from './containers/customer-harness/customer-harness.component';
import { CustomerAccountHarnessComponent } from './containers/customer-account-harness/customer-account-harness.component';
import { CustomerAccountFormComponent } from './components/customer-account-form/customer-account-form.component';
import { CustomerSettingsComponent } from './components/customer-settings/customer-settings.component';

import { CustomerAuthGuardService } from './services/customer-auth-guard.service';

const customerRoutes: Routes = [
  {
    path: '',
    component: CustomerContainerComponent, canActivate: [ CustomerAuthGuardService ],
    children: [
      { path: '', canActivateChild: [ CustomerAuthGuardService ],
        children: [
          { path: '', redirectTo: 'customer-dashbord', pathMatch: 'full' },
          { path: 'customer-dashboard', component: CustomerHarnessComponent, data: { title: 'Customer'} },
          { path: 'customer-account', component: CustomerAccountHarnessComponent, data: { title: 'Customer Account' } },
        ] },
    ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerRoutingModule {}