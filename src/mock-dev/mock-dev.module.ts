import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { DevLibModule } from '../dev-lib/dev-lib.module';

// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';

import { MockDevRoutingModule } from './mock-dev-routing.module';

import { MockDevDialogComponent } from './containers/mock-dev-dialog/mock-dev-dialog.component';
import { MockDevShellComponent } from './containers/mock-dev-shell/mock-dev-shell.component';
import { MockDevContainerComponent } from './containers/mock-dev-container/mock-dev-container.component';
import { MockDevDashboardComponent } from './components/mock-dev-dashboard/mock-dev-dashboard.component';
import { MockDevListComponent } from './components/mock-dev-list/mock-dev-list.component';
import { MockDevDetailComponent } from './components/mock-dev-detail/mock-dev-detail.component';

import { MockDevDataService } from './services/mock-dev-data.service';
import { MockDevAuthGuardService } from './services/mock-dev-auth-guard.service';
//TODO: import { MockDevCustomSequenceService } from './services/mock-dev-custom-sequence.service';

// mock-dev-data-item-resolver.service is imported in the mock-dev-routing.module

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DevLibModule,
    MockDevRoutingModule
  ],
  declarations: [
    MockDevDialogComponent,
    MockDevShellComponent,
    MockDevContainerComponent,
    MockDevDashboardComponent,
    MockDevListComponent,
    MockDevDetailComponent
  ],
  exports: [
    MockDevDialogComponent,
    MockDevShellComponent,
    MockDevContainerComponent,
    MockDevDashboardComponent,
    MockDevListComponent,
    MockDevDetailComponent
  ],
  providers: [
    MockDevDataService,
    MockDevAuthGuardService,
    // MockDevCustomSequenceService
  ],
  entryComponents: [
  
  ]
})
export class MockDevModule {}