
/** https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation */
/** https://coryrylan.com/blog/listening-to-angular-key-events-with-host-listeners */
/** https://angular.io/guide/user-input#key-event-filtering-with-keyenter */
/** https://netbasal.com/implementing-event-modifiers-in-angular-87e1a07969ce */

import { Directive, Output, EventEmitter, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { KEY_CODES } from '../../models/key-codes.model';

@Directive({
  selector: '[keyup.left-arrow-stop]'
})
export class LeftArrowStopDirective implements OnInit, OnDestroy {
  
  @Output("keyup.left-arrow-stop")
  leftArrowStopEvent = new EventEmitter();
  
  unsubscribe;
  
  constructor(private renderer2: Renderer2, private elementRef: ElementRef) {
    
  }
  
  ngOnInit() {
    this.unsubscribe = this.renderer2.listen(this.elementRef.nativeElement, "keyup", event => {
      
      event.stopPropagation(); 
      
      if (event.keyCode === KEY_CODES.LEFT_ARROW) {
        // this.leftArrowStopEvent.emit('from left-arrow-stop.directive');
        this.leftArrowStopEvent.emit(event);
      }
      
    });
  }
  
  ngOnDestroy() {
    this.unsubscribe();
  }
}