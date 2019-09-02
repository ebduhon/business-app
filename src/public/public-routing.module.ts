import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicShellComponent } from './public-shell/public-shell.component';
import { SignInShellComponent } from './sign-in-shell/sign-in-shell.component';
import { SignUpShellComponent } from './sign-up-shell/sign-up-shell.component';

import { PublicAuthGuardService } from './services/public-auth-guard.service';

const publicRoutes: Routes = [
  {
    path: '',
    component: PublicShellComponent, canActivate: [ PublicAuthGuardService ],
    children: [
      { path: '', canActivateChild: [ PublicAuthGuardService ],
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', loadChildren: 'home/home.module#HomeModule', canLoad: [ PublicAuthGuardService ], data: { title: 'Home'} },
          { path: 'sign-up', component: SignUpShellComponent, data: { title: 'Sign Up'} },
          { path: 'sign-in', component: SignInShellComponent, data: { title: 'Sign In'} },
        ] },
    ] }  
];


@NgModule({
  imports: [
    RouterModule.forChild(publicRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule {}