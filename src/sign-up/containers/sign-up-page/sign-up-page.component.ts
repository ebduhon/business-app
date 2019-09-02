import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SignUp } from '../../../auth/sign-up';
import { SignUpFacade } from '../../../auth/sign-up/sign-up.facade';
import * as SignUpActions from '../../../auth/sign-up/sign-up.actions';

@Component({
  selector: 'sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  
  auth$: Observable<any> = this.store.select('auth');
  signUp$: Observable<SignUp> = this.signUpService.signUp$;

  constructor(private store: Store<any>, private signUpService: SignUpFacade) { }

  ngOnInit() {
  }
  
  onSubmit($event) {
    this.signUpService.signUp($event);
  }

}
