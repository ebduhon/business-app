import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SignOut } from '../../../auth/sign-out';
import { SignOutFacade } from '../../../auth/sign-out/sign-out.facade';
import * as SignOutActions from '../../../auth/sign-out/sign-out.actions';

@Component({
  selector: 'sign-out-harness',
  templateUrl: './sign-out-harness.component.html',
  styleUrls: ['./sign-out-harness.component.scss']
})
export class SignOutHarnessComponent implements OnInit {
  
  auth$: Observable<any> = this.store.select('auth');
  signOut$: Observable<SignOut> = this.signOutService.signOut$;

  constructor(private store: Store<any>, private signOutService: SignOutFacade) { }

  ngOnInit() {
  }
  
  handleSignOut() {
    this.signOutService.signOut();
  }

}
