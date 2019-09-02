import { Component, OnInit } from '@angular/core';

/**
 * TemplateRef
 * • https://angular.io/api/core/TemplateRef
 * • Represents an Embedded Template that can be used to instantiate Embedded Views.
 *   You can access a 'TemplateRef', in two ways.
 *   Via a directive placed on a '<ng-template>' element (or directive prefixed with '*') and
 *   have the 'TemplateRef' for this Embedded View injected into the constructor of the directive using the 'TemplateRef' Token.
 *   Alternatively you can query for the 'TemplateRef' from a Component or Directive via 'Query'.
 *   To instantiate Embedded Views based on a 'TemplateRef', use 'ViewContainerRef', 
 *   which will create the View and attach it to the View Container.
 * 
 */

@Component({
  selector: 'dev-template-ref-1',
  templateUrl: './dev-template-ref-1.component.html',
  styleUrls: ['./dev-template-ref-1.component.scss']
})
export class DevTemplateRef1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
