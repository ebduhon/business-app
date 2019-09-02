import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ConnectivityFacade } from './connectivity/connectivity.facade';
import { PersistenceFacade } from './persistence/persistence.facade';
import { SignInFacade } from './sign-in/sign-in.facade';
import { SignOutFacade } from './sign-out/sign-out.facade';
import { SignUpFacade } from './sign-up/sign-up.facade';
import { StatusFacade } from './status/status.facade';
import { UserFirebaseIdentityFacade } from './user-firebase-identity/user-firebase-identity.facade';
import { UserPresenceFacade } from './user-presence/user-presence.facade';
import { getAuthReducersProvider, AUTH_REDUCER_TOKEN } from './get-auth-reducers.provider';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('auth', AUTH_REDUCER_TOKEN),
    EffectsModule.forFeature([
      ConnectivityFacade,
      PersistenceFacade,
      SignInFacade,
      SignOutFacade,
      SignUpFacade,
      StatusFacade,
      UserFirebaseIdentityFacade,
      UserPresenceFacade
    ]),
  ],
  providers: [
    getAuthReducersProvider,
    ConnectivityFacade,
    PersistenceFacade,
    SignInFacade,
    SignOutFacade,
    SignUpFacade,
    StatusFacade,
    UserFirebaseIdentityFacade,
    UserPresenceFacade
  ]
})
export class AuthModule {}