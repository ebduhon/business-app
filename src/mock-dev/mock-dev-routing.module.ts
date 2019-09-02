import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MockDevContainerComponent } from './containers/mock-dev-container/mock-dev-container.component';
import { MockDevDashboardComponent } from './components/mock-dev-dashboard/mock-dev-dashboard.component';
import { MockDevListComponent } from './components/mock-dev-list/mock-dev-list.component';
import { MockDevDetailComponent } from './components/mock-dev-detail/mock-dev-detail.component';

import { MockDevAuthGuardService } from './services/mock-dev-auth-guard.service';
import { MockDevDataItemResolverService } from './services/mock-dev-data-item-resolver.service';
//TODO: can-deactivate-guard

const mockDevRoutes: Routes = [
  {
    path: '',
    component: MockDevContainerComponent, canActivate: [ MockDevAuthGuardService ],
    children: [
      { path: '',
        component: MockDevListComponent,
        children: [
          { path: ':id', 
            component: MockDevDetailComponent,
            resolve: {
              mockDevDataItem: MockDevDataItemResolverService
            }
          },
          {
            path: '',
            component: MockDevDashboardComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mockDevRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MockDevDataItemResolverService
  ]
})
export class MockDevRoutingModule {}