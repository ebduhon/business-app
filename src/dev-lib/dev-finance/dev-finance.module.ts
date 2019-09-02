import { NgModule, InjectionToken, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { DevHcoPaymentModule } from './dev-hco-payment/dev-hco-payment.module';
// import { DevHcoReceiptModule } from './dev-hco-receipt/dev-hco-receipt.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
  
  ],
  providers: [
  
  ],
  exports: [
  
  ],
  entryComponents: [
  
  ]
})
export class DevFinanceModule {
  static withComponents(components: any[]) {
    return {
      ngModule: DevFinanceModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
      ]
    }
  }
}