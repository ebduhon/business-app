import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DevMaterialModule } from '../dev-material/dev-material.module';
import { DevDemoRoutingModule } from './dev-demo-routing.module';

// development
import { DevDbmsModule } from '../dev-dbms/dev-dbms.module';


import { DevDemoContainerComponent } from './containers/dev-demo-container/dev-demo-container.component';
import { DemoSidenavComponent } from './components/demo-sidenav/demo-sidenav.component';
import { DemoDrawerComponent } from './components/demo-drawer/demo-drawer.component';

import { DevDemoAuthGuardService } from './services/dev-demo-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    DevMaterialModule,
    DevDemoRoutingModule,
    DevDbmsModule
  ],
  declarations: [
    DevDemoContainerComponent,
    DemoSidenavComponent,
    DemoDrawerComponent
  ],
  providers: [
    DevDemoAuthGuardService
  ]
})
export class DevDemoModule {}