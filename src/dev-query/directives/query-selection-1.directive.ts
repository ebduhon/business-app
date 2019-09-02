// import { 
//   Directive, 
  
//   HostBinding, 
//   HostListener,
  
//   Input, 
//   Output,
//   EventEmitter,
  
//   ElementRef,
//   Inject,
//   SimpleChange, 
  
//   // Lifecycle Hooks
//   OnChanges, 
//   OnInit, 
//   DoCheck, 
//   OnDestroy  
// } from '@angular/core';
// import { DOCUMENT } from '@angular/common';

// /** https://angular.io/api/core/Directive */

// @Directive({
//   selector: '[querySelection1]',
//   host: {}
// })
// export class QuerySelection1Directive implements OnChanges, OnInit, OnDestroy {
  
//   constructor(private el: ElementRef) { }
  
//   selectedText: string = '';
  
//   @Input('querySelection1')
//   textSelection: string;
  
//   @Output()
//   textSelected = new EventEmitter();
  
//   @HostListener('mouseup')
//   onMouseUp(oField) {
//     var text = '';
//     if (window.getSelection) {
//       text = window.getSelection().toString();
//     } else if (document.selection && document.selection.type != "Control") {
//       text = document.selection.createRange().text;
//     }
//     this.selectedText = text;
//   }
  
//   ngOnChanges() {
    
//   }
  
//   ngOnInit() {
    
//   }
  
//   ngOnDestroy() {
    
//   }
  
//   private selection()
  
// }