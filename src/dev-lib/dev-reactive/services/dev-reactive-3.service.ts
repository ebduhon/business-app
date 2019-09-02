import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { asap } from 'rxjs/scheduler/asap';


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
export class DevReactive3Service {
  constructor() {
    
  }
  
  onMount() {
    
  }
  
  onUnmount() {
    
  }
}