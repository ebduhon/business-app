import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DevMaterialModule } from '../dev-material/dev-material.module';

import { DevNavRoutingModule} from './dev-nav-routing.module';

import { DevNavContainerComponent } from './containers/dev-nav-container/dev-nav-container.component';
import { DevNavHarnessComponent } from './containers/dev-nav-harness/dev-nav-harness.component';
import { DevNavDashboardComponent } from './components/dev-nav-dashboard/dev-nav-dashboard.component';
import { DevNavAuxiliaryComponent } from './components/dev-nav-auxiliary/dev-nav-auxiliary.component';
import { DevNavAncillaryComponent } from './components/dev-nav-ancillary/dev-nav-ancillary.component';
import { DevNavFormComponent } from './components/dev-nav-form/dev-nav-form.component';
import { DevNavListComponent } from './components/dev-nav-list/dev-nav-list.component';
import { DevNavDetailComponent } from './components/dev-nav-detail/dev-nav-detail.component';
import { DevNavManageAccountsComponent } from './components/dev-nav-manage-accounts/dev-nav-manage-accounts.component';
import { DevNavManageUsersComponent } from './components/dev-nav-manage-users/dev-nav-manage-users.component';
import { DevNavManageOrganizationsComponent } from './components/dev-nav-manage-organizations/dev-nav-manage-organizations.component';
import { DevNavManageCustomersComponent } from './components/dev-nav-manage-customers/dev-nav-manage-customers.component';
import { DevNavGroupComponent } from './components/dev-nav-group/dev-nav-group.component';
import { DevNavInputFieldComponent } from './components/dev-nav-input-field/dev-nav-input-field.component';


import { DevNavData1Service } from './services/dev-nav-data-1.service';
import { DevNavAuthGuard1Service } from './services/dev-nav-auth-guard-1.service';
import { DevNavResolver1Service } from './services/dev-nav-resolver-1.service';
import { DevNavCanDeactivateGuard1Service } from './services/dev-nav-can-deactivate-guard-1.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    DevMaterialModule,
    DevNavRoutingModule
  ],
  declarations: [
    DevNavContainerComponent,
    DevNavHarnessComponent,
    DevNavDashboardComponent,
    DevNavAuxiliaryComponent,
    DevNavAncillaryComponent,
    DevNavFormComponent,
    DevNavListComponent,
    DevNavDetailComponent,
    DevNavManageAccountsComponent,
    DevNavManageUsersComponent,
    DevNavManageOrganizationsComponent,
    DevNavManageCustomersComponent,
    DevNavGroupComponent,
    DevNavInputFieldComponent
  ],
  providers: [
    DevNavData1Service,
    DevNavAuthGuard1Service,
    DevNavResolver1Service,
    DevNavCanDeactivateGuard1Service
  ]
})
export class DevNavModule {}