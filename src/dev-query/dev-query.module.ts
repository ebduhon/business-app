import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DevQueryContainerComponent } from './containers/dev-query-container/dev-query-container.component';
import { DevQuery1Component } from './components/dev-query-1/dev-query-1.component';
import { DevQuery2Component } from './components/dev-query-2/dev-query-2.component';

import { DevQueryRoutingModule } from './dev-query-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DevQueryRoutingModule
  ],
  declarations: [
    DevQueryContainerComponent,
    DevQuery1Component,
    DevQuery2Component
  ],
  providers: [
  
  ],
  exports: [
    DevQueryContainerComponent
  ]
})
export class DevQueryModule {}