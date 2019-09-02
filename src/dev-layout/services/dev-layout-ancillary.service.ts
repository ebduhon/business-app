import { Injectable, TemplateRef } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DevLayoutAncillaryService {
  
  private templateRefSubject = new BehaviorSubject<TemplateRef<any>>(null);
  
  template$ = this.templateRefSubject.asObservable();
  
  setTemplate(tpl: TemplateRef<any>) {
    this.templateRefSubject.next(tpl);
  }
  
}