import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';

import { ConnectivityHarnessComponent } from './containers/connectivity-harness/connectivity-harness.component';
import { ConnectivityIndicatorComponent } from './components/connectivity-indicator/connectivity-indicator.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [
    ConnectivityHarnessComponent,
    ConnectivityIndicatorComponent
  ],
  exports: [
    ConnectivityHarnessComponent
  ]
})
export class ConnectivityModule {}