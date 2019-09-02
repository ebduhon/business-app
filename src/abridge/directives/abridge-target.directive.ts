import { Directive, ViewContainerRef, AfterViewInit, OnDestroy } from '@angular/core';

import { AbridgeService } from '../services/abridge.service';

@Directive({
  selector: '[abridgeTarget]'
})
export class AbridgeTargetDirective implements AfterViewInit, OnDestroy {
  
  ref;
  
  constructor(private abridgeService: AbridgeService, private viewContainerRef: ViewContainerRef) {
    
  }
  
  ngAfterViewInit() {
    this.abridgeService.template$
      .subscribe(tpl => {
        if (!tpl) {
          return;
        }
        this.ref = this.viewContainerRef.createEmbeddedView(tpl);
      });
  }
  
  ngOnDestroy() {
    this.ref.destroy();
  }
}