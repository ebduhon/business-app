import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FrameworkLayoutModule } from '../framework-layout/framework-layout.module'; 
import { SignUpModule } from '../sign-up/sign-up.module';
import { SignInModule } from '../sign-in/sign-in.module';

import { PublicRoutingModule } from './public-routing.module';

import { PublicAuthGuardService } from './services/public-auth-guard.service';

import { PublicShellComponent } from './public-shell/public-shell.component';
import { SignInShellComponent } from './sign-in-shell/sign-in-shell.component';
import { SignUpShellComponent } from './sign-up-shell/sign-up-shell.component';

@NgModule({
  imports: [
    SharedModule,
    FrameworkLayoutModule,
    SignUpModule,
    SignInModule,
    PublicRoutingModule
  ],
  declarations: [
    PublicShellComponent,
    SignInShellComponent,
    SignUpShellComponent
  ],
  providers: [
    PublicAuthGuardService
  ]
})
export class PublicModule {}