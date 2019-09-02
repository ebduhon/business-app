import { Directive, TemplateRef } from '@angular/core';

    /** template gets rendered in the component annotated with this directive instead of within the router-outlet */
    
@Directive({
  selector: '[abridgeOutlet]'
})
export class AbridgeOutletDirective {
  constructor(private templateRef: TemplateRef<any>) {

  }
}