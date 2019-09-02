import { NgModule, InjectionToken, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DevHcoReceiptRoutingModule } from './dev-hco-receipt-routing.module';

import { DevHcoReceiptPageComponent } from './containers/dev-hco-receipt-page/dev-hco-receipt-page.component';
import { DevHcoReceiptContainerComponent } from './containers/dev-hco-receipt-container/dev-hco-receipt-container.component';
import { DevHcoReceiptFormComponent } from './components/dev-hco-receipt-form/dev-hco-receipt-form.component';
import { DevHcoReceiptDialogComponent } from './components/dev-hco-receipt-dialog/dev-hco-receipt-dialog.component';

import { DevHcoReceiptAuthGuardService } from './services/dev-hco-receipt-auth-guard.service';
//TODO: hco-receipt.service
//TODO: hco-receipt-dialog.service

//TODO: exports
//TODO: entryComponents or ANALYZE_FOR_ENTRY_COMPONENTS in static withComponents

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DevHcoReceiptRoutingModule
  ],
  declarations: [
    DevHcoReceiptPageComponent,
    DevHcoReceiptContainerComponent,
    DevHcoReceiptFormComponent,
    DevHcoReceiptDialogComponent
  ],
  providers: [
    DevHcoReceiptAuthGuardService
  ],
  exports: [
  
  ],
  entryComponents: [
  
  ]
})
export class DevHcoReceiptModule {
  static withComponents(components: any[]) {
    return {
      ngModule: DevHcoReceiptModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
      ]
    }
  }
}