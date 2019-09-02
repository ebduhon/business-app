import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FrameworkLayoutModule } from '../framework-layout/framework-layout.module';
import { SignOutModule } from '../sign-out/sign-out.module';
import { UserProfileModule } from '../user-profile/user-profile.module';
import { SecureRoutingModule } from './secure-routing.module';
import { MatButtonModule } from '@angular/material';

import { SecureAuthGuardService } from './services/secure-auth-guard.service';

import { SecureShellComponent } from './secure-shell/secure-shell.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileShellComponent } from './user-profile-shell/user-profile-shell.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    SharedModule,
    FrameworkLayoutModule,
    SignOutModule,
    UserProfileModule,
    SecureRoutingModule,
    MatButtonModule
  ],
  declarations: [
    SecureShellComponent,
    DashboardComponent,
    UserProfileShellComponent,
    SettingsComponent
  ],
  providers: [
    SecureAuthGuardService
  ]
})
export class SecureModule {}