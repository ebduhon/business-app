import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SignIn } from '../../../auth/sign-in';
import { SignInFacade } from '../../../auth/sign-in/sign-in.facade';
import * as SignInActions from '../../../auth/sign-in/sign-in.actions';

import { Status } from '../../../auth/status';
import { StatusFacade } from '../../../auth/status/status.facade';
import * as StatusActions from '../../../auth/status/status.actions';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  
  signIn$: Observable<SignIn> = this.signInService.signIn$;
  status$: Observable<Status> = this.statusService.status$;
  //TODO: loading$
  //TODO: error$
  //TODO: errorCode$
  //TODO: errorMessage$
  

  constructor(private store: Store<any>, private signInService: SignInFacade, private statusService: StatusFacade) { }

  ngOnInit() {
  }
  
  //TODO: 
  // onSubmit($event: Authenticate) {
  //   this.signInService.signIn($event);
  // }
  
  onSubmit($event) {
    this.signInService.signIn($event);
    console.log(this.status$);
  }

}
