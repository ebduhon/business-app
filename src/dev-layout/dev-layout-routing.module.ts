import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevLayoutShellComponent } from './components/dev-layout-shell/dev-layout-shell.component';
import { DevLayoutPrimaryControllerComponent } from './components/dev-layout-primary-controller/dev-layout-primary-controller.component';
import { DevLayoutAncillaryControllerComponent } from './components/dev-layout-ancillary-controller/dev-layout-ancillary-controller.component';
import { DevLayoutAuxiliaryControllerComponent } from './components/dev-layout-auxiliary-controller/dev-layout-auxiliary-controller.component';
import { DevLayoutDashboardComponent } from './components/dev-layout-dashboard/dev-layout-dashboard.component';

import { DevLayoutGuardService } from './services/dev-layout-guard.service';

const devLayoutRoutes: Routes = [
  {
    path: '',
    component: DevLayoutShellComponent, canActivate: [ DevLayoutGuardService ],
    children: [
      { path: '', canActivateChild: [ DevLayoutGuardService ],
        children: [
          { path: '', redirectTo: 'dashboard' },
          { path: 'dashboard', component: DevLayoutDashboardComponent }
        ] }
    ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(devLayoutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DevLayoutRoutingModule {}