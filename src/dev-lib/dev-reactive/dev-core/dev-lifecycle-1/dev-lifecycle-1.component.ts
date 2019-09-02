
/**
 * ngOnChanges() 
 * • https://angular.io/api/core/OnChanges
 * • Respond when Angular (re)sets data-bound input properties.
 *   The method receives a 'SimpleChanges' object of current and previous values.
 *   Called before 'ngOnInit()' and whenever one or more data-bound input properties change.
 *
 * ngOnInit()
 * • https://angular.io/api/core/OnInit
 * • Initialize the directive/component after Angular first displays the data-bound properties 
 *   and sets the directive/component's input properties.
 *   Called once, after the first 'ngOnChanges()'.
 * 
 * ngDoCheck()
 * • https://angular.io/api/core/DoCheck
 * • Detect and act upon changes that Angular can't or won't detect on its own.
 *   Called during every change detection run, immediately after 'ngOnChanges()' and 'ngOnInit()'.
 * 
 * ngAfterContentInit()
 * • https://angular.io/api/core/AfterContentInit
 * • Respond after Angular projects external content into the component's view.
 *   Called once after the first 'ngDoCheck()'.
 *   A component-only hook.
 * 
 * ngAfterContentChecked()
 * • https://angular.io/api/core/AfterContentChecked
 * • Respond after Angular checks the content projected into the component.
 *   Called after the 'ngAfterContentInit()' and every subsequent 'ngDoCheck()'.
 *   A component-only hook.
 * 
 * ngAfterViewInit()
 * • https://angular.io/api/core/AfterViewInit
 * • Respond after Angular initializes the component's views and child views.
 *   Called once after the first 'ngAfterContentChecked()'.
 *   A component-only hook.
 * 
 * ngAfterViewChecked()
 * • https://angular.io/api/core/AfterViewChecked
 * • Respond after Angular checks the component's views and child views.
 *   Called after the 'ngAfterViewInit()' and every subsequent 'ngAfterContentChecked()'.
 *   A component-only hook.
 * 
 * ngOnDestroy()
 * • https://angular.io/api/core/OnDestroy
 * • Cleanup just before Angular destroys the directive/component.
 *   Unsubscribes Observables and deteach event handlers to avoid memory leaks.
 *   Called just before Angular destroys the directive/component.
 * 
 */

/**
 * SimpleChanges
 * • https://angular.io/api/core/SimpleChanges
 * • A 'changes' object whose keys are property names and values are instances of 'SimpleChange'. See OnChanges.
 * 
 * SimpleChange
 * • https://angular.io/api/core/SimpleChange
 * • Represents a basic change from a previous to a new value.
 * 
 */

/**
 * KeyValueDiffers
 * • https://angular.io/api/core/KeyValueDiffers
 * • A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
 *   Used for implementing custom dirty checking for collections.
 * 
 * KeyValueDifferFactory
 * • https://angular.io/api/core/KeyValueDifferFactory
 * • Provides a factory for 'KeyValueDiffer'.
 * 
 * KeyValueDiffer
 * • https://angular.io/api/core/KeyValueDiffer
 * • A differ that tracks changes made to an object over time.
 * 
 * KeyValueChanges
 * • https://angular.io/api/core/KeyValueChanges
 * • An object describing the changes in the 'Map' or '{[k:string]: string}' since last time 'KeyValueDiffer#diff()' was invoked.
 * 
 * KeyValueChangeRecord
 * • https://angular.io/api/core/KeyValueChangeRecord
 * • Record representing the item change information.
 * 
 */
 
/**
 * IterableDiffers
 * • https://angular.io/api/core/IterableDiffers
 * • A repository of different iterable diffing strategies used by NgFor, NgClass, and others.
 *   Used for implementing custom dirty checking for collections.
 * 
 * IterableDifferFactory
 * • https://angular.io/api/core/IterableDifferFactory
 * • Provides a factory for 'IterableDiffer'.
 * 
 * TrackByFunction
 * • https://angular.io/api/core/TrackByFunction
 * • An optional function passed into 'NgForOf' that defines how to track items in an iterable (e.g. fby index or id)
 * 
 * IterableDiffer
 * • https://angular.io/api/core/IterableDiffer
 * • A strategy for tracking changes over time to an iterable.
 *   Used by 'NgFor' to respond to changes in an iterable by effecting equivalent changes in the DOM.
 * 
 * NgIterable
 * • https://angular.io/api/core/NgIterable
 * • A type describing supported iterable types.
 * 
 * IterableChanges
 * • https://angular.io/api/core/IterableChanges
 * • An object describing the changes in the 'Iterable' collection since last time 'IterableDiffer#diff()' was invoked.
 * 
 * IterableChangeRecord
 * • https://angular.io/api/core/IterableChangeRecord
 * • Record representing the item change information.
 *
 */
 
import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Component } from '@angular/core';
 
 

@Component({
  selector: 'dev-lifecycle-1',
  templateUrl: './dev-lifecycle-1.component.html',
  styleUrls: ['./dev-lifecycle-1.component.scss']
})
export class DevLifecycle1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
