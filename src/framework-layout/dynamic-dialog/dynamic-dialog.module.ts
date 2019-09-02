/**
 * References:
 * https://material.io/guidelines/components/dialogs.html
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material';

import { DynamicDialogContainerComponent } from './containers/dynamic-dialog-container/dynamic-dialog-container.component';
import { DynamicDialogComponent } from './components/dynamic-dialog/dynamic-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  declarations: [
    DynamicDialogContainerComponent,
    DynamicDialogComponent
  ],
  exports: [
    DynamicDialogContainerComponent
  ]
})
export class DynamicDialogModule {}