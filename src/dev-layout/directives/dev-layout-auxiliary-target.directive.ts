import { Directive, ViewContainerRef, AfterViewInit, OnDestroy } from '@angular/core';

import { DevLayoutAuxiliaryService } from '../services/dev-layout-auxiliary.service';

@Directive({
  selector: '[devLayoutAuxiliaryTarget]'
})
export class DevLayoutAuxiliaryTargetDirective implements AfterViewInit, OnDestroy {
  
  templateViewRef;
  
  constructor(private viewContainerRef: ViewContainerRef, private devLayoutAuxiliaryService: DevLayoutAuxiliaryService) {}
  
  ngAfterViewInit() {
    this.devLayoutAuxiliaryService.template$
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