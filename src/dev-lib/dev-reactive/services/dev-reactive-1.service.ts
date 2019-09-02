import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

// Compare various way to create observable, new Observable vs observable.create

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

// import 'rxjs/add/'
// retryWhen
// refCount
// take(1)
// share
// observeOn

@Injectable()
export class DevReactive1Service {
  
  coldSubscription: Subscription;
  hotSubscription: Subscription;
  
  constructor() {}
  
  init() {
    console.log('dev-reactive.service init.');
    return 'initialized';
  }
  
  coldTeardown() {
    console.log('coldTeardown fired.');
  }
  
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

  public coldObservable = Observable.create(observer => {

    const coldProducer = [1, 2, 3, 4];
  
    for (let coldVal of coldProducer) {
      observer.next(`coldObservable: ${coldVal}`);
    }
    
    return () => {
      this.coldTeardown();
    };
    
  });
  
  hotProducer = [10, 20, 30, 40];
  
  public hotObservable = Observable.create(observer => {
    
    for (let hotVal of this.hotProducer) {
      observer.next(`hotObservable: ${hotVal}`);
    }
    
    return () => {
      this.hotTearDown();
    }
  });
  
  
  // makeHot(cold) {
  //   const subject = new Subject();
  //   cold.subscribe(subject);
  //   return new Observable((observer) => subject.subscribe(observer));
  // }
  
  onMount() {
    this.coldSubscription = this.coldObservable
      .subscribe(this.coldObserver);
    
    this.hotSubscription = this.hotObservable
      .subscribe(this.hotObserver);
  }
  
  onUnmount() {
    this.coldSubscription.unsubscribe();
    this.hotSubscription.unsubscribe();
  }
}