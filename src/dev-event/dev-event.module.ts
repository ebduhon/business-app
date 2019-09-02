import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StopPropagationDirective } from './directives/event-modifiers/stop-propagation.directive';
import { EnterStopDirective } from './directives/event-modifiers/enter-stop.directive';
import { EscapeStopDirective } from './directives/event-modifiers/escape-stop.directive';
import { LeftArrowStopDirective } from './directives/event-modifiers/left-arrow-stop.directive';
import { UpArrowStopDirective } from './directives/event-modifiers/up-arrow-stop.directive';
import { RightArrowStopDirective } from './directives/event-modifiers/right-arrow-stop.directive';
import { DownArrowStopDirective } from './directives/event-modifiers/down-arrow-stop.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StopPropagationDirective,
    EnterStopDirective,
    EscapeStopDirective,
    LeftArrowStopDirective,
    UpArrowStopDirective,
    RightArrowStopDirective,
    DownArrowStopDirective
  ],
  providers: [
  
  ],
  exports: [
    StopPropagationDirective,
    EnterStopDirective,
    EscapeStopDirective,
    LeftArrowStopDirective,
    UpArrowStopDirective,
    RightArrowStopDirective,
    DownArrowStopDirective
  ]
})
export class DevEventModule {}