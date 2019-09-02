import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { asap } from 'rxjs/scheduler/asap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/observeOn';

import { UserEntry1Service } from '../../services/user-entry-1.service';
import { DevEmailConfirmation1Service } from '../../services/dev-email-confirmation-1.service';

@Component({
  selector: 'dev-user-form-1',
  templateUrl: './dev-user-form-1.component.html',
  styleUrls: ['./dev-user-form-1.component.scss']
})
export class DevUserForm1Component implements OnChanges, OnInit, OnDestroy {
  
  userEntry$: Observable<any>;
  
  userEntry: any;
  userEntryForm: FormGroup;
  
  
  constructor(private fb: FormBuilder, private afDb: AngularFireDatabase, private userEntry1Service: UserEntry1Service, private devEmailConfirmation1Service: DevEmailConfirmation1Service) {
    
   //afDb.object('development/user')
    
  }

  ngOnChanges(){
  }

  ngOnInit() {
  }
  
  ngOnDestroy() {
  }
  
  startNewUserEntry() {
    this.userEntry = this.userEntry1Service.createUserEntry();
      
    this.buildForm();
  }
  
  saveUserEntryChanges() {
    if (this.userEntryForm.status != 'VALID') {
      console.log('form is not valid, cannot save to database');
      return
    }
    
    const data = this.userEntryForm.value;
    this.userEntry1Service.updateUserEntry(this.userEntry, data);
  }
  
  buildForm() {
    this.userEntryForm = this.fb.group({
      id: '',
      email: [ '', Validators.required, Validators.minLength(4), Validators.maxLength(64), Validators.email ],
      firstName: [ '', Validators.required ],
      lastName: [ '', Validators.required ]
    });
      
    this.userEntry
      .snapshotChanges()
      .map(action => {
        console.log(action.type);
        console.log(action.key);
        console.log(action.payload.val());
        const data = { ...action.payload.val() };
        return data;
      })
      .subscribe(data => {
        if (data != null) {
          console.log(data);
          //this.userEntryForm.patchValue(data)
        }
      });
  }
  
  logStateChanges($event) {
    console.log('logStateChanges $event: ', $event);
  }
  
  onSendConfirmationEmail() {
    this.devEmailConfirmation1Service.sendConfirmationEmail('ebduhon@gmail.com');
  }

}
