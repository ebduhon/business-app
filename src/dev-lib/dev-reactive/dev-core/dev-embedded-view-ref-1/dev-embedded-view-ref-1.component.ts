import { Component, OnInit } from '@angular/core';

/**
 * EmbeddedViewRef
 * • https://angular.io/api/core/EmbeddedViewRef
 * • Represents an Angular View.
 *   A View is a fundamental building block of the application UI.
 *   It is the smallest grouping of Elements which are created and destroyed together.
 *   Properties of elements in a View can change, but the structure (number and order) of elements in a View cannot.
 *   Changing the structure of Elements can only be done by inserting, moving or removing nested Views via a 'ViewContainerRef'.
 *   Each View can contain many View Containers.
 * 
 */

@Component({
  selector: 'dev-embedded-view-ref-1',
  templateUrl: './dev-embedded-view-ref-1.component.html',
  styleUrls: ['./dev-embedded-view-ref-1.component.scss']
})
export class DevEmbeddedViewRef1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
