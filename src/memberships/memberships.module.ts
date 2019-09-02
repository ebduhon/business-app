import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//TODO: rename MembershipsContainerComponent
import { MembershipContainerComponent } from './containers/membership-container/membership-container.component';
import { MembershipEffects } from './effects/membership.effects';
import { reducers } from './reducers';

import { MembershipsRoutingModule } from './memberships-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('memberships', reducers),
    EffectsModule.forFeature([
      MembershipEffects
    ]),
    MembershipsRoutingModule
  ],
  declarations: [
    MembershipContainerComponent
  ],
  providers: [
  
  ],
  exports: [
    MembershipContainerComponent
  ]
})
export class MembershipsModule {}