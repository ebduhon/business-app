import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomerStoreModule } from '../customer-store/customer-store.module';
import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerContainerComponent } from './containers/customer-container/customer-container.component';
import { CustomerHarnessComponent } from './containers/customer-harness/customer-harness.component';
import { CustomerAccountHarnessComponent } from './containers/customer-account-harness/customer-account-harness.component';
import { CustomerAccountFormComponent } from './components/customer-account-form/customer-account-form.component';
import { CustomerSettingsComponent } from './components/customer-settings/customer-settings.component';

import { CustomerAuthGuardService } from './services/customer-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CustomerStoreModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomerContainerComponent,
    CustomerHarnessComponent,
    CustomerAccountHarnessComponent,
    CustomerAccountFormComponent,
    CustomerSettingsComponent
  ],
  providers: [
    CustomerAuthGuardService
  ],
  entryComponents: [
    CustomerContainerComponent,
    CustomerHarnessComponent
  ]
})
export class CustomerModule {}