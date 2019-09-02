import { Component, Input, Output, EventEmitter, Inject, ViewChild, OnChanges, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

function passwordMatcher(c: AbstractControl) {
  return c.get('password').value === c.get('confirmPassword').value // check if password matches confirmPassword
    ? null : {'nomatch': true}; // if there is a match return null to indicate valid, otherwise return error 'nomatch' true to indicate invalid
}

//TODO: async validators

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

//TODO: develop type definition for a registration or sign-up model to type the output property binding submitted event emitter

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnChanges, OnInit, AfterViewChecked, OnDestroy {
  
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
    console.log('sign-up-form.component ngOnChanges lifecycle hook fired.');
  }
  
  ngOnInit() {
    console.log('sign-up-form.component ngOnInit lifecycle hook fired.');
    
    // the following evaluation of the email control valueChanges is related to setup for checking input against existing already taken emails via an async validator to validate email availability
    // query firebase for a list of unavailable emails and 
    // compare the input value of the email form control against the list to determine "asynchronously" 
    // whether the form is valid, 
    // this logic should be properly implemented in an actual async validator adhering to the native interface in the angular api
    this.rootForm.get('email').valueChanges
      .filter(val => val.length >= 2)
      .debounceTime(500)
      .subscribe(valid => console.log(valid));
  }
  
  createForm() {
    this.rootForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(64), Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)] ],
      confirmPassword: ['', [Validators.required] ]
    }, {validator: passwordMatcher});
  }
  
  get email() { return this.rootForm.get('email'); }
  
  //TODO: reconsider the parameter ordering and format related to object destructuring of the submitted payload in the signUpFacade, consider omitting confirmPassword in the submitted payload as it is not necessary
  submit() {
    if (this.rootForm.valid) {
      this.submitted.emit(this.rootForm.value);
    }
    console.log('sign-up-form submit clicked.');
    
    //development testing rootForm control value accessors
    console.log('sign-up-form submit email: ', this.email);
    console.log('sign-up-form submit password: ', this.rootForm.get('password'));
  }
  
  ngAfterViewChecked() {
    console.log('sign-up-form.component ngAfterViewChecked lifecycle hook fired.');
  }
  
  ngOnDestroy() {
    console.log('sign-up-form.component ngOnDestroy lifecycle hook fired.');
  }

}
