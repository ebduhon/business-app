
/** https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation */
/** https://coryrylan.com/blog/listening-to-angular-key-events-with-host-listeners */
/** https://angular.io/guide/user-input#key-event-filtering-with-keyenter */
/** https://netbasal.com/implementing-event-modifiers-in-angular-87e1a07969ce */

import { Directive, Output, EventEmitter, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { KEY_CODES } from '../../models/key-codes.model';

@Directive({
  selector: '[keyup.escape-stop]'
})
export class EscapeStopDirective implements OnInit, OnDestroy {
  
  @Output("keyup.escape-stop")
  escapeStopEvent = new EventEmitter();
  
  unsubscribe;
  
  constructor(private renderer2: Renderer2, private elementRef: ElementRef) {
    
  }
  
  ngOnInit() {
    this.unsubscribe = this.renderer2.listen(this.elementRef.nativeElement, "keyup", event => {
      
      event.stopPropagation(); 
      
      if (event.keyCode === KEY_CODES.ESCAPE) {
        // this.escapeStopEvent.emit('from escape-stop.directive');
        this.escapeStopEvent.emit(event);
      }
      
    });
  }
  
  ngOnDestroy() {
    this.unsubscribe();
  }
}