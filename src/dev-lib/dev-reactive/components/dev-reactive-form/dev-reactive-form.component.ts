import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'dev-reactive-form',
  templateUrl: './dev-reactive-form.component.html',
  styleUrls: ['./dev-reactive-form.component.scss']
})
export class DevReactiveFormComponent implements OnInit, OnChanges, OnDestroy {
  activatedColor = 'accent';
  
  
  rootForm: FormGroup;
  
  isActivatedLog: boolean[] = [];
  
  isActivated: boolean = false;
  
  config;
  queryLabel = {
    label: 'Query'
  };

  constructor(public fb: FormBuilder, private afDb: AngularFireDatabase) {
    this.config = this.queryLabel;
    this.createForm();
    this.isActivatedChanges();
  }

  ngOnInit() {
  }
  
  ngOnChanges() {
    console.log(this.isActivatedLog);
    console.log(this.rootForm.get('activated').value);
  }
  
  ngOnDestroy() {
    
  }
  
  createForm() {
    this.rootForm = this.fb.group({
      collaborativeText: '',
      query: { value: '', disabled: !this.isActivated },
      activated: this.isActivated,
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      identityPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]]
    });
  }
  
  isActivatedChanges() {
    const isActivatedControl = this.rootForm.get('activated');
    isActivatedControl.valueChanges.forEach(
      (value: boolean) => {
        this.isActivatedLog.push(value);
        value ? this.enableQuery() : this.disableQuery();
      }
    )
  }
  
  toggleIsActivated($event) {
    console.log($event);
  }
  
  enableQuery() {
    const query = this.rootForm.get('query');
    query.enable();
  }
  
  disableQuery() {
    const query = this.rootForm.get('query');
    query.disable();
  }
  
  onSubmit() {
    this.ngOnChanges();
  }

}
