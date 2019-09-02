
// Ben Lesh, Hot vs Cold Observables & On the Subject of Subjects 
// References:
// https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339
// https://medium.com/@benlesh/on-the-subject-of-subjects-in-rxjs-2b08b7198b93

import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

// Compare various way to create observable, new Observable vs observable.create



import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { asap } from 'rxjs/scheduler/asap';

// instance methods are imported from 'rxjs/add/operator', the operator directory contains all of the instance methods
// static methods are imported from 'rxjs/add/observable', the observable directory contains all of the static methods
// in RxJS some methods are only instance, some methods are only static, and some methods overlap both

// expand
// retryWhen
// subject.refCount()
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/interval';


import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/operator/share';



@Injectable()
export class DevReactive2Service {
  
  public coldSubscription: Subscription;
  public hotSubscription: Subscription;
  public warmSubject: Subject<any>;
  
  constructor() {}
  
  // coldObservable teardown method
  coldTeardown() {
    console.log('coldTeardown fired.');
  }
  
  // hotObservable teardown method
  hotTearDown() {
    console.log('hotTearDown fired.');
  }
  
  coldObserver = {
    next: (data) => {
      console.log('coldObserver next: ', data);
      //console.log(data);
    },
    error: (err) => {
      console.error('coldObserver error: ');
      console.error(err);
    },
    complete: () => {
      console.log('coldObserver complete.');
    }
  };
  
  hotObserver = {
    next: (data) => {
      console.log('hotObserver next: ', data);
      //console.log(data);
    },
    error: (err) => {
      console.error('hotObserver error: ');
      console.error(err);
    },
    complete: () => {
      console.log('hotObserver complete.');
    }
  };

  //Start: "cold" observable
  public coldObservable = Observable.create(observer => {

    const coldProducer = [1, 2, 3, 4];
  
    for (let coldVal of coldProducer) {
      observer.next(`coldObservable: ${coldVal}`);
    }
    
    return () => {
      this.coldTeardown();
    };
    
  });
  //End: "cold" observable
  
  //Start: "hot" observable
  hotProducer = [10, 20, 30, 40];
  public hotObservable = Observable.create(observer => {
    
    for (let hotVal of this.hotProducer) {
      observer.next(`hotObservable: ${hotVal}`);
    }
    
    return () => {
      this.hotTearDown();
    }
  });
  //End: "hot" observable
  
  // Rx observable does not "trap" errors
  // when an error percolates to the end of the observer chain, if the error is unhandled, it will be re-thrown
  exampleOne() {
    const badObservable = Observable.throw(new Error('The program encountered an error thrown at exampleOne.'));
    
    try {
      badObservable.subscribe({
        next: x => console.log(x),
        error: null,
        complete: () => console.log('completed.')
      });
    } catch (err) {
      console.error(err); // logs Error: 'The program encountered an error thrown at badObservable.'
    }
  }
  
  // behavior in terms of looping over a list of observers and notifying them in the context of a subject
  // given that a number of operators are processed synchronously, (map, filter, scan, etc.),
  // if you have an error thrown in one of those, or any other synchronous operation, 
  // downstream from a multicast (which is using a subject to loop over a list of observers and notify them),
  // you can get unpredictable behavior
  exampleTwo() {
    const source$ = Observable.interval(1000).share();
    
    const mapped$ = source$.map(x => {
      if (x === 1) {
        throw new Error('The program encountered an error thrown at exampleTwo. Uncaught error kills other streams and source stream.');
      }
      return x;
    });
    
    source$.subscribe(x => console.log('exampleTwo A', x));
    mapped$.subscribe(x => console.log('exampleTwo B', x));
    source$.subscribe(x => console.log('exampleTwo C', x));
  }
  
 // You can use schedulers to workaround uncaught errors killing other streams and the source stream in multicast scenarios,
 // you can use .observeOn() after your multicast and you'll get around this problem
 // because errors will no longer be thrown synchronously
  
  exampleThree() {
    const source$ = Observable.interval(1000)
      .share()
      .observeOn(asap);
    
    const mapped$ = source$.map(x => {
      if (x === 1) {
        throw new Error('The program encountered an error thrown at exampleThree.');
      }
      return x;
    });
    
    source$.subscribe(x => console.log('exampleThree A', x));
    mapped$.subscribe(x => console.log('exampleThree B', x));
    source$.subscribe(x => console.log('exampleThree C', x));
  }
  
  // Another workaround, that is a little more performant if you can manage it, 
  // is to simply add an error handler to all of your subscriptions
  
  
  exampleFour() {
    const source$ = Observable.interval(1000)
      .share()
      .observeOn(asap);
    
    const mapped$ = source$.map(x => {
      if (x === 1) {
        throw new Error('The program encountered an error thrown at exampleFour.');
      }
      return x;
    });
    
    source$.subscribe(x => console.log('exampleFour A', x));
    mapped$.subscribe(
      x => console.log('exampleFour B', x),
      err => console.log('Error encountered at exampleFour handled: ' + err.message)
    );
    source$.subscribe(x => console.log('exampleFour C', x));
  }
  
  
  onMount() {
    this.coldSubscription = this.coldObservable
      .subscribe(this.coldObserver);
    
    this.hotSubscription = this.hotObservable
      .subscribe(this.hotObserver);
    
    // this.exampleOne();
    // this.exampleTwo();
    // this.exampleThree();
    this.exampleFour();
  }
  
  onUnmount() {
    this.coldSubscription.unsubscribe();
    this.hotSubscription.unsubscribe();
    
  }
}