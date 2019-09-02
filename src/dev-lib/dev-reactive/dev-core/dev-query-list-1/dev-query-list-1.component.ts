import { Component, OnInit } from '@angular/core';

/**
 * QueryList
 * • https://angular.io/api/core/QueryList
 * • An unmodifiable list of items that Angular keeps up to date when the state of the application changes.
 *   The type of object that 'ViewChildren', 'ContentChildren', and 'QueryList' provide.
 *   Implements an iterable interface, therefore, it can be used in both ES6 Javascript 'for (var i of items)' loops
 *   as well as in Angular templates with '*ngFor="let i of myList"'.
 *   Changes can be observed by subscribing to the changes 'Observable'.
 *   NOTE: In the future this class will implement an 'Observable' interface.
 * 
 */

@Component({
  selector: 'dev-query-list-1',
  templateUrl: './dev-query-list-1.component.html',
  styleUrls: ['./dev-query-list-1.component.scss']
})
export class DevQueryList1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
