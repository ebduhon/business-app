import { Directive, TemplateRef, AfterViewInit, OnDestroy } from '@angular/core';

import { DevLayoutAncillaryService } from '../services/dev-layout-ancillary.service';

@Directive({
  selector: '[devLayoutAncillarySource]'
})
export class DevLayoutAncillarySourceDirective implements AfterViewInit, OnDestroy {
  
  constructor(private templateRef: TemplateRef<any>, private devLayoutAncillaryService: DevLayoutAncillaryService) {}
  
  ngAfterViewInit() {
    this.devLayoutAncillaryService.setTemplate(this.templateRef);
  }
  
  ngOnDestroy() {
    
  }
  
}