import { Injectable, TemplateRef } from '@angular/core';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/** http://reactivex.io/rxjs/manual/overview.html#replaysubject */
/** https://stackoverflow.com/questions/43118769/angular-2-special-observables-subject-behaviour-subject-replaysubject */
/** https://stackoverflow.com/questions/34849873/what-are-the-semantics-of-different-rxjs-subjects/34860777#34860777 */
/** BehaviorSubject is good for tracking the last value */
/** ReplaySubject can act like BehaviorSubject if it is initialized with '1'; however,
 *  ReplaySubject is also good for lazy subscribers that need to know everything, i.e.,
 *  your observable is tracking some events for multiple items, as another item gets loaded, 
 *  you'd need to know the last value "for that item", not the last value.
 */

@Injectable()
export class AbridgeService {
  
  // private templateRefSubject = new ReplaySubject<TemplateRef<any>>(1);
  private templateRefSubject = new BehaviorSubject<TemplateRef<any>>(null);
  
  template$ = this.templateRefSubject.asObservable();
  
  setTemplate(tpl: TemplateRef<any>) {
    this.templateRefSubject.next(tpl);
  }

}