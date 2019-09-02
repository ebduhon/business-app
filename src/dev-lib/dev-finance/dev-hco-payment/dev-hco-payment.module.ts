import { NgModule, InjectionToken, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DevHcoPaymentRoutingModule } from './dev-hco-payment-routing.module';

import { DevHcoPaymentPageComponent } from './containers/dev-hco-payment-page/dev-hco-payment-page.component';
import { DevHcoPaymentContainerComponent } from './containers/dev-hco-payment-container/dev-hco-payment-container.component';
import { DevHcoPaymentFormComponent } from './components/dev-hco-payment-form/dev-hco-payment-form.component';
import { DevHcoPaymentDialogComponent } from './components/dev-hco-payment-dialog/dev-hco-payment-dialog.component';

import { DevHcoPaymentAnchorDirective } from './directives/dev-hco-payment-anchor.directive';

import { DevHcoPaymentAuthGuardService } from './services/dev-hco-payment-auth-guard.service';
//TODO: hco-payment.service
//TODO: hco-payment-dialog.service

//TODO: exports
//TODO: entryComponents or ANALYZE_FOR_ENTRY_COMPONENTS in static withComponents

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DevHcoPaymentRoutingModule
  ],
  declarations: [
    DevHcoPaymentPageComponent,
    DevHcoPaymentContainerComponent,
    DevHcoPaymentFormComponent,
    DevHcoPaymentDialogComponent,
    
    DevHcoPaymentAnchorDirective
  ],
  providers: [
    DevHcoPaymentAuthGuardService
  ],
  exports: [
  
  ],
  entryComponents: [
  
  ]
})
export class DevHcoPaymentModule {
  static withComponents(components: any[]) {
    return {
      ngModule: DevHcoPaymentModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
      ]
    }
  }
}