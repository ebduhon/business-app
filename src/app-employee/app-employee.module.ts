import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppEmployeeRoutingModule } from './app-employee-routing.module';
import { AppEmployeeComponent } from './app-employee.component';

//TODO: depending on the implementation of fw-public, fw-secure, or some other pluggable architecture or framework switch the order of the declarations list and imports list such that the imports list is at index[0]
@NgModule({
  imports: [
    BrowserModule,
    AppEmployeeRoutingModule
  ],
  declarations: [
    AppEmployeeComponent
  ],
  providers: [
    Title
  ],
  bootstrap: [AppEmployeeComponent]
})
export class AppEmployeeModule { }
