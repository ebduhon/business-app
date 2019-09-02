import { Directive, TemplateRef, AfterViewInit, OnDestroy } from '@angular/core';

import { DevLayoutAuxiliaryService } from '../services/dev-layout-auxiliary.service';

@Directive({
  selector: '[devLayoutAuxiliarySource]'
})
export class DevLayoutAuxiliarySourceDirective implements AfterViewInit, OnDestroy {
  
  constructor(private templateRef: TemplateRef<any>, private devLayoutAuxiliaryService: DevLayoutAuxiliaryService) {}
  
  ngAfterViewInit() {
    this.devLayoutAuxiliaryService.setTemplate(this.templateRef);
  }
  
  ngOnDestroy() {
    
  }
  
}