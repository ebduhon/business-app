import { Component, Input, Output, EventEmitter, Inject, ViewChild, OnChanges, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

//TODO: async validators

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

//TODO: develop type definition for a user profile model to type the output property binding submitted event emitter

@Component({
  selector: 'user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnChanges, OnInit, AfterViewChecked, OnDestroy {
  
  //TODO:
  // @Input()
  // set loading() {}
  
  //TODO:
  // @Input()
  // error(): string;

  //TODO:
  // @Input()
  // errorCode: string;
  
  //TODO:
  // @Input()
  // errorMessage: string;
  
  @Output()
  submitted = new EventEmitter();
  
  rootForm: FormGroup;
  
  
  constructor(public fb: FormBuilder) {
  
    this.createForm();  
  
  }
  
  createForm() {
    this.rootForm = this.fb.group({
      displayName: [''],
      photoURL: ['']
    });
  }
  
  submit() {
    if (this.rootForm.valid) {
      this.submitted.emit(this.rootForm.value);
    }
    console.log('user-profile-form submit clicked.');
  }
  
  ngOnChanges() {
    console.log('user-profile-form.component ngOnChanges lifecycle hook fired.');
  }

  ngOnInit() {
    console.log('user-profile-form.component ngOnInit lifecycle hook fired.');
    
  }
  
  ngAfterViewChecked() {
    console.log('user-profile-form.component ngAfterViewChecked lifecycle hook fired.');
  }

  ngOnDestroy() {
    console.log('user-profile-form.component ngOnDestroy lifecycle hook fired.');
  }

}
