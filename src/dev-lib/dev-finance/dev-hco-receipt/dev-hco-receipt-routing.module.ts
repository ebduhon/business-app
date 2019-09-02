import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevHcoReceiptPageComponent } from './containers/dev-hco-receipt-page/dev-hco-receipt-page.component';
import { DevHcoReceiptContainerComponent } from './containers/dev-hco-receipt-container/dev-hco-receipt-container.component';
import { DevHcoReceiptFormComponent } from './components/dev-hco-receipt-form/dev-hco-receipt-form.component';
import { DevHcoReceiptDialogComponent } from './components/dev-hco-receipt-dialog/dev-hco-receipt-dialog.component';

import { DevHcoReceiptAuthGuardService } from './services/dev-hco-receipt-auth-guard.service';

const devHcoReceiptRoutes: Routes = [
  {
    path: 'dev-hco-receipt-page',
    component: DevHcoReceiptPageComponent, canActivate: [ DevHcoReceiptAuthGuardService ],
    children: [
      { path: '', canActivateChild: [ DevHcoReceiptAuthGuardService ],
        children: [
          { path: '', redirectTo: 'dev-hco-receipt', pathMatch: 'full' },
          { path: 'dev-hco-receipt', component: DevHcoReceiptContainerComponent, data: { title: 'Dev HCO Receipt' } },
        ] }  
    ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(devHcoReceiptRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DevHcoReceiptRoutingModule {}