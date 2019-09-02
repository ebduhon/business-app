import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministrationContainerComponent } from './containers/administration-container/administration-container.component';

const administrationRoutes: Routes = [
  {
    path: '',
    component: AdministrationContainerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(administrationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministrationRoutingModule {}