import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DevEventModule } from '../dev-event/dev-event.module';
import { DevLayoutRoutingModule } from './dev-layout-routing.module';


import { DevLayoutShellComponent } from './components/dev-layout-shell/dev-layout-shell.component';
import { DevLayoutPrimaryControllerComponent } from './components/dev-layout-primary-controller/dev-layout-primary-controller.component';
import { DevLayoutAncillaryControllerComponent } from './components/dev-layout-ancillary-controller/dev-layout-ancillary-controller.component';
import { DevLayoutAuxiliaryControllerComponent } from './components/dev-layout-auxiliary-controller/dev-layout-auxiliary-controller.component';
import { DevLayoutDashboardComponent } from './components/dev-layout-dashboard/dev-layout-dashboard.component';
import { DevLayoutButtonComponent } from './components/dev-layout-button/dev-layout-button.component';
import { DevLayoutInputComponent } from './components/dev-layout-input/dev-layout-input.component';


import { DevLayoutAncillarySourceDirective } from './directives/dev-layout-ancillary-source.directive';
import { DevLayoutAncillaryTargetDirective } from './directives/dev-layout-ancillary-target.directive';
import { DevLayoutAuxiliarySourceDirective } from './directives/dev-layout-auxiliary-source.directive';
import { DevLayoutAuxiliaryTargetDirective } from './directives/dev-layout-auxiliary-target.directive';

import { DevLayoutGuardService } from './services/dev-layout-guard.service';
import { DevLayoutAncillaryService } from './services/dev-layout-ancillary.service';
import { DevLayoutAuxiliaryService } from './services/dev-layout-auxiliary.service';

import { DevLayoutScreenService } from './services/dev-layout-screen.service';
import { DevLayoutSplitPaneService } from './services/dev-layout-split-pane.service';
import { DevLayoutPosition, DEV_LAYOUT_POSITION_PROVIDER } from './services/dev-layout-position';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DevEventModule,
    DevLayoutRoutingModule
  ],
  declarations: [
    DevLayoutShellComponent,
    DevLayoutPrimaryControllerComponent,
    DevLayoutAncillaryControllerComponent,
    DevLayoutAuxiliaryControllerComponent,
    DevLayoutDashboardComponent,
    DevLayoutButtonComponent,
    DevLayoutInputComponent,
    DevLayoutAncillarySourceDirective,
    DevLayoutAncillaryTargetDirective,
    DevLayoutAuxiliarySourceDirective,
    DevLayoutAuxiliaryTargetDirective
  ],
  providers: [
    DEV_LAYOUT_POSITION_PROVIDER,
    DevLayoutGuardService,
    DevLayoutAncillaryService,
    DevLayoutAuxiliaryService,
    DevLayoutScreenService,
    DevLayoutSplitPaneService
  ]
})
export class DevLayoutModule {}