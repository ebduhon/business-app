import { Directive } from '@angular/core';

/** https://en.wikipedia.org/wiki/Materialized_view */
/** https://angular.io/api/core/Directive */

@Directive({
  selector: '[dev-materialized-view]',
  exportAs: 'devMaterializedView'
})
export class DevMaterializedViewDirective {
  constructor() {}
}