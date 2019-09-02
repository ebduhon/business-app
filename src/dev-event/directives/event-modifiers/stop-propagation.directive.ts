
/** https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation */
/** See the following reference about event modifiers in Angular */
/** https://netbasal.com/implementing-event-modifiers-in-angular-87e1a07969ce */

import { Directive, Output, EventEmitter, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[click.stop]'
})
export class StopPropagationDirective implements OnInit, OnDestroy {
  
  @Output("click.stop") 
  stopPropEvent = new EventEmitter();

  unsubscribe;
  
  constructor(private renderer2: Renderer2, private elementRef: ElementRef) {
    
  }
  
  ngOnInit() {
    this.unsubscribe = this.renderer2.listen(this.elementRef.nativeElement, "click", event => {
      event.stopPropagation();
      this.stopPropEvent.emit(event);
    });
  }
  
  ngOnDestroy() {
    this.unsubscribe();
  }
}