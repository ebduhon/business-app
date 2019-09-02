import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AdministrationContainerComponent } from './containers/administration-container/administration-container.component';

import { AccountFacade } from './account/account.facade';
import { getAdministrationReducersProvider, ADMINISTRATION_REDUCER_TOKEN } from './get-administration-reducers.provider';

import { AdministrationRoutingModule } from './administration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('administration', ADMINISTRATION_REDUCER_TOKEN),
    EffectsModule.forFeature([
      AccountFacade
    ]),
    AdministrationRoutingModule
  ],
  declarations: [
    AdministrationContainerComponent
  ],
  providers: [
    getAdministrationReducersProvider,
    AccountFacade
  ],
  exports: [
    AdministrationContainerComponent
  ]
})
export class AdministrationModule {}