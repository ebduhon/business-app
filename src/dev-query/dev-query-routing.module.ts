import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevQueryContainerComponent } from './containers/dev-query-container/dev-query-container.component';

const devQueryRoutes: Routes = [
  {
    path: '',
    component: DevQueryContainerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(devQueryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DevQueryRoutingModule {}