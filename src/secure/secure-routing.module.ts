import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecureShellComponent } from './secure-shell/secure-shell.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileShellComponent } from './user-profile-shell/user-profile-shell.component';
import { SettingsComponent } from './settings/settings.component';

import { SecureAuthGuardService } from './services/secure-auth-guard.service';

const secureRoutes: Routes = [
  {
    path: 'secure',
    component: SecureShellComponent, canActivate: [ SecureAuthGuardService ],
    children: [
      { path: '', canActivateChild: [ SecureAuthGuardService ],
        children: [
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'},
            children: [
              { path: 'settings', component: SettingsComponent, outlet: 'secondary' },
            ] },
          { path: 'user-profile', component: UserProfileShellComponent, data: { title: 'User Profile Page' } },
          { path: ':organization', loadChildren: 'organization/organization.module#OrganizationModule', canLoad: [ SecureAuthGuardService ], data: { title: 'Organization' } },
          { path: ':organization/:customer', loadChildren: 'customer/customer.module#CustomerModule', canLoad: [ SecureAuthGuardService ], data: { title: 'Customer' } },
          
        ] },
    ] },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(secureRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SecureRoutingModule {}