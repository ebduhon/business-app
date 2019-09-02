import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevHcoPaymentPageComponent } from './containers/dev-hco-payment-page/dev-hco-payment-page.component';
import { DevHcoPaymentContainerComponent } from './containers/dev-hco-payment-container/dev-hco-payment-container.component';
import { DevHcoPaymentFormComponent } from './components/dev-hco-payment-form/dev-hco-payment-form.component';
import { DevHcoPaymentDialogComponent } from './components/dev-hco-payment-dialog/dev-hco-payment-dialog.component';

import { DevHcoPaymentAuthGuardService } from './services/dev-hco-payment-auth-guard.service';

const devHcoPaymentRoutes: Routes = [
  {
    path: 'dev-hco-payment-page',
    component: DevHcoPaymentPageComponent, canActivate: [ DevHcoPaymentAuthGuardService ],
    children: [
      { path: '', canActivateChild: [ DevHcoPaymentAuthGuardService ],
        children: [
          { path: '', redirectTo: 'dev-hco-payment', pathMatch: 'full' },
          { path: 'dev-hco-payment', component: DevHcoPaymentContainerComponent, data: { title: 'Dev HCO Payment' } },
        ] }  
    ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(devHcoPaymentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DevHcoPaymentRoutingModule {}