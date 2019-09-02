
/** https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation */
/** https://coryrylan.com/blog/listening-to-angular-key-events-with-host-listeners */
/** https://angular.io/guide/user-input#key-event-filtering-with-keyenter */
/** https://netbasal.com/implementing-event-modifiers-in-angular-87e1a07969ce */

/** 
 * Angular exposes a pseudo-event `keyup.enter` 
 * and calls the event handler only when the user presses Enter, 
 * a custom directive for `keyup.enter` is unnecessary; consequently,
 * `keyup.enter-stop` works as expected 
 * and does not inadvertently trigger the pseudo-event exposed by Angular on `keyup.enter`
 */

import { Directive, Output, EventEmitter, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { KEY_CODES } from '../../models/key-codes.model';

@Directive({
  selector: '[keyup.enter-stop]'
})
export class EnterStopDirective implements OnInit, OnDestroy {
  
  @Output("keyup.enter-stop")
  enterStopEvent = new EventEmitter();
  
  unsubscribe;
  
  constructor(private renderer2: Renderer2, private elementRef: ElementRef) {
    
  }
  
  ngOnInit() {
    this.unsubscribe = this.renderer2.listen(this.elementRef.nativeElement, "keyup", event => {
      
      event.stopPropagation();
      
      if (event.keyCode === KEY_CODES.ENTER) {
        // this.enterStopEvent.emit('from enter-stop.directive');
        this.enterStopEvent.emit(event);
      }
      
    });
  }
  
  ngOnDestroy() {
    this.unsubscribe();
  }
}