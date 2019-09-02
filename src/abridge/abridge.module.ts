import { NgModule, InjectionToken, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbridgeSourceHarnessComponent } from './containers/abridge-source-harness/abridge-source-harness.component';
import { AbridgeTargetHarnessComponent } from './containers/abridge-target-harness/abridge-target-harness.component';
import { AbridgeSourceComponent } from './components/abridge-source/abridge-source.component';
import { AbridgeTargetComponent } from './components/abridge-target/abridge-target.component';

import { AbridgeSourceDirective } from './directives/abridge-source.directive';
import { AbridgeTargetDirective } from './directives/abridge-target.directive';

import { AbridgeService } from './services/abridge.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AbridgeSourceHarnessComponent,
    AbridgeTargetHarnessComponent,
    AbridgeSourceComponent,
    AbridgeTargetComponent,
    
    AbridgeSourceDirective,
    AbridgeTargetDirective
  ],
  providers: [
    AbridgeService
  ],
  exports: [
    AbridgeSourceHarnessComponent,
    AbridgeTargetHarnessComponent
  ]
})
export class AbridgeModule {}