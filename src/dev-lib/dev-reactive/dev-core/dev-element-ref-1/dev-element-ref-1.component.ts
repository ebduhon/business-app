import { Component, OnInit } from '@angular/core';

/**
 * ElementRef
 * • https://angular.io/api/core/ElementRef
 * • Security Risk
 *   Permitting direct access to the DOM can make your application more vulnerable to XSS attacks.
 *   Carefully review any use of 'ElementRef' in your code.
 *   For more detail, see the Security Guide.
 * 
 */

@Component({
  selector: 'dev-element-ref-1',
  templateUrl: './dev-element-ref-1.component.html',
  styleUrls: ['./dev-element-ref-1.component.scss']
})
export class DevElementRef1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
