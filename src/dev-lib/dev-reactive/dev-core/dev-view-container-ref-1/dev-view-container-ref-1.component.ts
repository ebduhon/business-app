import { Component, OnInit } from '@angular/core';

/**
 * ViewContainerRef
 * • https://angular.io/api/core/ViewContainerRef
 * • Represents a container where one or more Views can be attached.
 *   The container can contain two kinds of Views.
 *   Host Views, created by instantiating a 'Component' via 'createComponent',
 *   and Embedded Views, created by instantiating an 'Embedded Template' via 'createEmbeddedView'.
 *   The location of the View Container within the containing View is specified by the Anchor 'element'.
 *   Each View Container can have only one Anchor Element and each Anchor Element can only have a single View Container.
 *   Root elements of Views attached to this container become siblings of the Anchor Element in the Rendered View.
 *   To access a 'ViewContainerRef' of an Element, you can either place a 'Directive' injected with 'ViewContainerRef' on the Element,
 *   or you obtain it via a 'ViewChild' query.
 * 
 */

@Component({
  selector: 'dev-view-container-ref-1',
  templateUrl: './dev-view-container-ref-1.component.html',
  styleUrls: ['./dev-view-container-ref-1.component.scss']
})
export class DevViewContainerRef1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
