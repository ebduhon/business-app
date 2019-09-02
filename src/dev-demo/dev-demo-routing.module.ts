import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevDemoContainerComponent } from './containers/dev-demo-container/dev-demo-container.component';
import { DemoSidenavComponent } from './components/demo-sidenav/demo-sidenav.component';
import { DemoDrawerComponent } from './components/demo-drawer/demo-drawer.component';

import { DevDemoAuthGuardService } from './services/dev-demo-auth-guard.service';

const devDemoRoutes: Routes = [
  {
    path: '',
    component: DevDemoContainerComponent, canActivate: [ DevDemoAuthGuardService ],
    children: [
      { path: '', canActivateChild: [ DevDemoAuthGuardService ],
        children: [
          { path: 'demo-sidenav', component: DemoSidenavComponent },
          { path: 'demo-drawer', component: DemoDrawerComponent },
          
        ] },
    ] } 
];


@NgModule({
  imports: [
    RouterModule.forChild(devDemoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DevDemoRoutingModule {}