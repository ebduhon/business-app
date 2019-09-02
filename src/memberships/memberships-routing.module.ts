import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MembershipContainerComponent } from './containers/membership-container/membership-container.component';

const membershipsRoutes: Routes = [
  {
    path: '',
    component: MembershipContainerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(membershipsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MembershipsRoutingModule {}