import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CustomerAccountFacade } from './customer-account/customer-account.facade';
import { getCustomerStoreReducersProvider, CUSTOMER_STORE_REDUCER_TOKEN } from './get-customer-store-reducers.provider';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('customer-store', CUSTOMER_STORE_REDUCER_TOKEN),
    EffectsModule.forFeature([
      CustomerAccountFacade
    ])
  ],
  providers: [
    getCustomerStoreReducersProvider,
    CustomerAccountFacade
  ]
})
export class CustomerStoreModule {}