import { Directive, TemplateRef, AfterViewInit, OnDestroy } from '@angular/core';

import { AbridgeService } from '../services/abridge.service';

@Directive({
  selector: '[abridgeSource]'
})
export class AbridgeSourceDirective implements AfterViewInit, OnDestroy {
  constructor(private abridgeService: AbridgeService, private templateRef: TemplateRef<any>) {
    
  }
  
  ngAfterViewInit() {
    this.abridgeService.setTemplate(this.templateRef);
  }
  
  ngOnDestroy() {
    
  }
}