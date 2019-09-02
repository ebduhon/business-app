import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { DevMaterialModule } from '../dev-material/dev-material.module';

import { DevReactiveModule } from './dev-reactive/dev-reactive.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DevMaterialModule,
    DevReactiveModule
  ],
  providers: [
  
  ],
  exports: [
    DevMaterialModule,
    DevReactiveModule
  ]
})
export class DevLibModule {}