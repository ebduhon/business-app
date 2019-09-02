import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireAction } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { asap } from 'rxjs/scheduler/asap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/observeOn';

export class UserEntry {
  id: '';
  firstName: '';
  lastName: '';
}

@Injectable()
export class UserEntry1Service {
  

  userEntryRef;
  
  constructor(private afDb: AngularFireDatabase) {
  }
  
  // Creates a UserEntry, then returns as an object
  createUserEntry() {
    const userEntryDefault = new UserEntry();
    const userEntryKey = this.afDb.list('/development/user-entry').push(userEntryDefault).key;
    return this.afDb.object(`/development/user-entry/${userEntryKey}`);
  }
  
  // Updates an existing UserEntry
  updateUserEntry(userEntry: any, data: any) {
    return userEntry.update(data);
  }
  
  sendEmail
  
  
  
  
}