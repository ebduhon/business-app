import { Injectable } from '@angular/core';

/** CanDeactivate
 * https://angular.io/api/router/CanDeactivate
 * https://angular.io/guide/router#candeactivate-handling-unsaved-changes
 * https://angular.io/guide/router#cancel-and-save
 * Interface that a class can implement to be a guard deciding if a route can be deactivated.
 */
import { CanDeactivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DevNavCanDeactivateGuard1Service implements CanDeactivate<CanComponentDeactivate> {
  
  constructor() {}

  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}