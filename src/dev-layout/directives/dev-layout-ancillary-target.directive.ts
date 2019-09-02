import { Directive, ViewContainerRef, AfterViewInit, OnDestroy } from '@angular/core';

import { DevLayoutAncillaryService } from '../services/dev-layout-ancillary.service';

@Directive({
  selector: '[devLayoutAncillaryTarget]'
})
export class DevLayoutAncillaryTargetDirective implements AfterViewInit, OnDestroy {
  
  templateViewRef;
  
  constructor(private viewContainerRef: ViewContainerRef, private devLayoutAncillaryService: DevLayoutAncillaryService) {}
  
  ngAfterViewInit() {
    this.devLayoutAncillaryService.template$
      .subscribe(templateView => {
        if (!templateView) {
          return;
        }
        this.templateViewRef = this.viewContainerRef.createEmbeddedView(templateView);
      });
    
  }
  
  ngOnDestroy() {
    this.templateViewRef.destroy();
  }
}