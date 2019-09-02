// import { Injectable } from '@angular/core';

// import { Observable } from 'rxjs/Observable';

// import { Subject } from 'rxjs/Subject';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { ReplaySubject } from 'rxjs/ReplaySubject';
// import { AsyncSubject } from 'rxjs/AsyncSubject';

// import { Observer } from 'rxjs/Observer';

// // import { ISubscription } from 'rxjs/Subscription';


// /**
// * instance methods are imported from 'rxjs/add/operator', the operator directory contains all of the instance methods
// * static methods are imported from 'rxjs/add/observable', the observable directory contains all of the static methods
// * 
// * import { Observable } from 'rxjs/Observable';
// * import 'rxjs/add/operator/combineLatest';
// * 
// * let hello = Observable.of('Hello')
// * let world = Observable.of('World')
// * 
// * hello.combineLatest(world)
// * 
// * import 'rxjs/add/observable/combineLatest';
// * 
// * Observable.combineLatest(hello,world)
// *
// */


// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/operator/takeWhile';

// import { IMockData } from '../models/mock-data.model';

// @Injectable()
// export class MockDevCustomSequenceService {
  
//   private mockData: Array<IMockData> = [
//     { id: 0, data: "data 1" },
//     { id: 1, data: "data 2" },
//     { id: 2, data: "data 3" },
//     { id: 3, data: "data 4" },
//   ];
  
//   const mockObserver = {
//     next: (data) => {
//       console.log('mockObserver data: ');
//       console.log(data);
//     },
//     error: (err) => {
//       console.log('mockObserver err: ');
//       console.log(err);
//     },
//     complete: () => {
//       console.log('mockObserver complete.');
//     }
//   };
  
//   // .subscribe(next, error, complete) 
  
//   mockObservable(data: any) {
//     console.log('mockObservable: ');
//     return new Observable(mockObserver: Observer => {
//       if (data) {
//         console.log('mockObservable data: ');
//         console.log(data);
//         mockObserver.next(data);
//       } else {
//         console.log('mockObservable no data.');
//         mockObserver.next(null);
//       }
//     });
//   }
  
  
//   mockObservable(data: any) {
//     let observable = Observable.create(customObserver: Observer => {
//       if (data) {
//         console.log('appPresenceObservable data: ');
//         console.log(data);
//         customObserver.next(data);
//       } else {
//         console.log('appPresenceObservable no data.');
//         customObserver.next(null);
//       }
//     });
//     return observable;
//   }

  
//   activateMock() {
//     this.mockObservable(this.mockData);
//   }
  
//   constructor() {
    
//   }
// }