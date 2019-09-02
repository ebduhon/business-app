import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';

import { SelectivePreloadingStrategy } from './services/selective-preloading-strategy';

import { LayoutHarnessComponent } from '../framework-layout/layout-harness/layout-harness.component';

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: '/public' }
// ];

// const routes: Routes = [
  
//   { path: '', 
//     component: LayoutHarnessComponent, canActivate: [ AuthGuardService ],
//     children: [
//       { path: '', redirectTo: '/home-page', pathMatch: 'full' },
//       { path: ':organization', component: OrganizationContainerComponent }
//     ]
//   }
// ];

// const routes: Routes = [
  
//   { path: '', 
//     component: LayoutHarnessComponent, canActivate: [ AuthGuardService ],
//     children: [
//       { path: '', redirectTo: '/home-page', pathMatch: 'full' },
//       { path: 'organization', loadChildren: 'organization/organization.module#OrganizationModule', canLoad: [ AuthGuardService ] } 
//     ]
//   }
// ];

// const routes: Routes = [
  
//   { path: '', 
//     component: LayoutHarnessComponent, canActivate: [ AuthGuardService ],
//     children: [
//       { path: '', canActivateChild: [ AuthGuardService ],
//         children: [
        
//         ] },
//       { path: '', redirectTo: '/home-page', pathMatch: 'full' },
//       { path: 'home-page', loadChildren: 'home/home.module#HomeModule', canLoad: [ AuthGuardService ] },
//       { path: 'organization', loadChildren: 'organization/organization.module#OrganizationModule', canLoad: [ AuthGuardService ] } 
//     ]
//   }
// ];

// const routes: Routes = [
//   { path: '', 
//     canActivate: [ AuthGuardService ],
//     children: [
//       { path: '', canActivateChild: [ AuthGuardService ],
//         children: [
//           { path: '', redirectTo: '/public', pathMatch: 'full' },
//           { path: 'home-page', loadChildren: 'home/home.module#HomeModule', canLoad: [ AuthGuardService ] },
//           { path: 'organization', loadChildren: 'organization/organization.module#OrganizationModule', canLoad: [ AuthGuardService ] } 
//         ] },
//     ] }
// ];

// const routes: Routes = [
//   { path: '', redirectTo: '/public', pathMatch: 'full' },
//   { path: 'dev-nav', loadChildren: 'dev-nav/dev-nav.module#DevNavModule', canLoad: [ AuthGuardService ], data: { title: 'Dev Nav'} },
//   { path: 'dev-demo', loadChildren: 'dev-demo/dev-demo.module#DevDemoModule', canLoad: [ AuthGuardService ], data: { title: 'Dev Demo'} },
//   { path: 'dev-todos', loadChildren: 'dev-todos/dev-todos.module#DevTodosModule', canLoad: [ AuthGuardService ], data: { title: 'Dev Todos'} },
//   { path: 'regions', loadChildren: 'regions/regions.module#RegionsModule', canLoad: [ AuthGuardService ], data: { title: 'Regions'} },
// ];

const routes: Routes = [
  { path: '', redirectTo: '/public', pathMatch: 'full' },
  { path: 'dev-nav', loadChildren: 'dev-nav/dev-nav.module#DevNavModule', canLoad: [ AuthGuardService ], data: { title: 'Dev Nav'} },
  { path: 'dev-demo', loadChildren: 'dev-demo/dev-demo.module#DevDemoModule', canLoad: [ AuthGuardService ], data: { title: 'Dev Demo'} },
  { path: 'dev-query', loadChildren: 'dev-query/dev-query.module#DevQueryModule', canLoad: [ AuthGuardService ], data: { title: 'Dev Query'} },
  { path: 'dev-layout', loadChildren: 'dev-layout/dev-layout.module#DevLayoutModule', canLoad: [ AuthGuardService ], data: { title: 'Dev Layout'} },
  { path: 'administration', loadChildren: 'administration/administration.module#AdministrationModule', canLoad: [ AuthGuardService ], data: { title: 'Administration'} },
  { path: 'memberships', loadChildren: 'memberships/memberships.module#MembershipsModule', canLoad: [ AuthGuardService ], data: { title: 'Memberships'} }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true, // debugging
        preloadingStrategy: SelectivePreloadingStrategy
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService,
    CanDeactivateGuardService,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { 
  
}
