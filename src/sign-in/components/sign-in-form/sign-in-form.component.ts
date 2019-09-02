import { Component, Input, Output, EventEmitter, Inject, ViewChild, OnChanges, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

//TODO: async validators

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

//TODO: develop type definition for a authentication or sign-in model to type the output property binding submitted event emitter

@Component({
  selector: 'sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnChanges, OnInit, AfterViewChecked, OnDestroy {
  
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
  
  ngOnChanges() {
    console.log('sign-in-form.component ngOnChanges lifecycle hook fired.');
  }

  ngOnInit() {
    console.log('sign-in-form.component ngOnInit lifecycle hook fired.');
    // This may not be neccessary to support an asynchronous validator in the sign-in component to check email availability because the email would have already been created in terms of sequential order of the authflow after registration is already complete
    this.rootForm.get('email').valueChanges
      .filter(val => val.length >= 2)
      .debounceTime(500)
      .subscribe(valid => console.log(valid));
  }
  
  createForm() {
    this.rootForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(64), Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)] ]
    });
  }
  
  get email() { return this.rootForm.get('email'); }
  
  submit() {
    if (this.rootForm.valid) {
      this.submitted.emit(this.rootForm.value);
    }
    console.log('sign-in-form submit clicked');
  }
  
  ngAfterViewChecked() {
    console.log('sign-in-form.component ngAfterViewChecked lifecycle hook fired.');
  }
  
  ngOnDestroy() {
    console.log('sign-in-form.component ngOnDestroy lifecycle hook fired.');
  }

}
