import { NgModule, InjectionToken, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevMaterializedViewControllerComponent } from './controller-components/dev-materialized-view-controller/dev-materialized-view-controller.component';
import { DevMaterializedViewComponent } from './presentation-components/dev-materialized-view/dev-materialized-view.component';

import { DevMaterializedViewDirective } from './directives/dev-materialized-view.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DevMaterializedViewControllerComponent,
    DevMaterializedViewComponent,
    DevMaterializedViewDirective
  ],
  providers: [
  
  ],
  exports: [
    DevMaterializedViewControllerComponent,
    DevMaterializedViewComponent,
    DevMaterializedViewDirective
  ]
})
export class DevDbmsModule {}