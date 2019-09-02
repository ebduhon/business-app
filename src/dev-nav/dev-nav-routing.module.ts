import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

import { DevNavAuthGuard1Service } from './services/dev-nav-auth-guard-1.service';
import { DevNavResolver1Service } from './services/dev-nav-resolver-1.service';
import { DevNavCanDeactivateGuard1Service } from './services/dev-nav-can-deactivate-guard-1.service';

// const devNavRoutes: Routes = [
//   {
//     path: '',
//     component: DevNavContainerComponent, canActivate: [ DevNavAuthGuard1Service ],
//     children: [
//       { path: '', canActivateChild: [ DevNavAuthGuard1Service ],
//         children: [
//           { path: '', redirectTo: 'dashboard' },
//           { path: 'accounts', component: DevNavManageAccountsComponent },
//           { path: 'users', component: DevNavManageUsersComponent },
//           { path: 'dashboard', component: DevNavDashboardComponent,
//             children: [
//               { path: ':auxiliaryId', component: DevNavAuxiliaryComponent, outlet: 'auxiliary'},
//               { path: ':ancillaryId', component: DevNavAncillaryComponent, outlet: 'ancillary' }
//             ] },
//         ] },
//     ] } 
// ];

const devNavRoutes: Routes = [
  {
    path: '',
    component: DevNavContainerComponent, canActivate: [ DevNavAuthGuard1Service ],
    children: [
      { path: '', canActivateChild: [ DevNavAuthGuard1Service ],
        children: [
          { path: '', redirectTo: 'dashboard' },
          { path: 'accounts', component: DevNavManageAccountsComponent },
          { path: 'users', component: DevNavManageUsersComponent },
          { path: 'dashboard', component: DevNavDashboardComponent,
            children: [
              { path: ':auxiliaryId', component: DevNavAuxiliaryComponent, outlet: 'auxiliary'},
              { path: ':ancillaryId', component: DevNavAncillaryComponent, outlet: 'ancillary' }
            ] },
          { path: ':id', component: DevNavDashboardComponent,
            children: [
              { path: ':auxiliaryId', component: DevNavAuxiliaryComponent, outlet: 'auxiliary'},
              { path: ':ancillaryId', component: DevNavAncillaryComponent, outlet: 'ancillary' }
            ] },
        ] },
    ] } 
];


@NgModule({
  imports: [
    RouterModule.forChild(devNavRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DevNavRoutingModule {}