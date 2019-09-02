// import { Injectable } from '@angular/core';
// import { CanActivate, CanActivateChild, CanLoad, Route, Router } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

// @Injectable()
// export class PageGuardService implements CanActivate {
//   constructor(private store: Store<any>) {}
  
//   // wrapping the logic so we can .switchMap() it
//   getFromStoreOrAPI(): Observable<any> {
    
//     // return an Observable stream from the store
//     return this.store
//     // selecting the pages state using a feature selector
//     .select
//   }
  
// }