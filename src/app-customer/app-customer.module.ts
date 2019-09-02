import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppCustomerRoutingModule } from './app-customer-routing.module';
import { AppCustomerComponent } from './app-customer.component';

//TODO: depending on the implementation of fw-public, fw-secure, or some other pluggable architecture or framework switch the order of the declarations list and imports list such that the imports list is at index[0]
@NgModule({
  imports: [
    BrowserModule,
    AppCustomerRoutingModule
  ],
  declarations: [
    AppCustomerComponent
  ],
  providers: [
    Title
  ],
  bootstrap: [AppCustomerComponent]
})
export class AppCustomerModule { }
