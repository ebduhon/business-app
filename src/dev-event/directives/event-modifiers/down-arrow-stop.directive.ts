
/** https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation */
/** https://coryrylan.com/blog/listening-to-angular-key-events-with-host-listeners */
/** https://angular.io/guide/user-input#key-event-filtering-with-keyenter */
/** https://netbasal.com/implementing-event-modifiers-in-angular-87e1a07969ce */

import { Directive, Output, EventEmitter, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { KEY_CODES } from '../../models/key-codes.model';

@Directive({
  selector: '[keyup.down-arrow-stop]'
})
export class DownArrowStopDirective implements OnInit, OnDestroy {
  
  @Output("keyup.down-arrow-stop")
  downArrowStopEvent = new EventEmitter();
  
  unsubscribe;
  
  constructor(private renderer2: Renderer2, private elementRef: ElementRef) {
    
  }
  
  ngOnInit() {
    this.unsubscribe = this.renderer2.listen(this.elementRef.nativeElement, "keyup", event => {
      
      event.stopPropagation(); 
      
      if (event.keyCode === KEY_CODES.DOWN_ARROW) {
        // this.downArrowStopEvent.emit('from down-arrow-stop.directive');
        this.downArrowStopEvent.emit(event);
      }
      
    });
  }
  
  ngOnDestroy() {
    this.unsubscribe();
  }
}