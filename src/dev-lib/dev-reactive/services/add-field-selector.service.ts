import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireAction} from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { asap } from 'rxjs/scheduler/asap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/observeOn';

@Injectable()
export class AddFieldSelectorService {
  
  fieldTypeListRef;
  fields;
  
  constructor(private afDb: AngularFireDatabase) {
    this.fieldTypeListRef = afDb.list('development/field-type-list');
  }
  
  getFieldTypeListValueChanges() {
    return this.fieldTypeListRef.valueChanges()
      .share()
      .observeOn(asap);
  }
  
  getFieldTypeListSnapshotChanges() {
    return this.fieldTypeListRef.snapshotChanges()
      .share()
      .observeOn(asap);
  }
  
  getFieldTypeListStateChanges() {
    return this.fieldTypeListRef.stateChanges()
      .share()
      .observeOn(asap);
  }
  
  
  
  
  
  addField(value, path = 'development/field-type-list') {
    
    this.fieldTypeListRef.push(value);
    
    console.log('addFieldModel path: ', path);
    
  }
  
  removeField() {
    
  }
  
  private queryList(path: string) {
    return this.afDb.list(`${path}`);
  }
  
  private queryOrderByChild(path: string) {
    
  }
  
  private queryOrderByKey(path: string) {
    
  }
  
  private queryOrderByValue(path: string) {
    
  }
  
  
}