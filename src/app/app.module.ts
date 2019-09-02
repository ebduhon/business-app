import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, animate, style, transition } from '@angular/animations';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './state/root';
import { CustomRouterStateSerializer } from './state/utils/custom-router-state-serializer';

import { NavigationFacade } from './state/navigation/navigation.facade';

import { CoreModule } from '../core/core.module';
import { AuthModule } from '../auth/auth.module';
import { FrameworkStoreModule } from '../framework-store/framework-store.module';
import { FrameworkLayoutModule } from '../framework-layout/framework-layout.module';


//TODO:
// AuthModule is disabled for development as it should be provided 
// as a StoreModule.forFeature to StateModule
// The AuthModule will need to be split into the (AuthStateModule "state only")  FrameworkAuthStore
// and (AuthModule "components only"), FrameworkAuth
// the "components only" feature.module components have no independent access to store.module 
// or related specific slices of state,
// therefore, requires a factory function to dynamically resolve the context



import { SecureModule } from '../secure/secure.module';
import { PublicModule } from '../public/public.module';


// Start: app configuration initialization 
//TODO: import config/app.config.ts
//TODO: export the below function
// export function initConfig(config: AppConfig) {
//   return () => config.load()
// };
// app.module providers 
// AppConfig
// { provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfig], multi: true }
// End: app configuration initialization

import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './services/auth-guard.service';
import { AppComponent } from './app.component';

// import { MockDevModule } from '../mock-dev/mock-dev.module';

import { environment } from '../environments/environment';
// export const firebaseConfig = environment.firebase['ciBusiness'];
export const firebaseConfig = environment.firebase['businessApp'];
//TODO: depending on the implementation of fw-public, fw-secure, or some other pluggable architecture or framework switch the order of the declarations list and imports list such that the imports list is at index[0]
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    CoreModule.forRoot(),
    AuthModule,
    FrameworkStoreModule,
    FrameworkLayoutModule,
    SecureModule,
    PublicModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AuthModule,
    FrameworkStoreModule
  ],
  providers: [
    Title,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    
  }
}
