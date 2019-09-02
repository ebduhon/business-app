import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { UserFirebaseIdentity } from '../../../auth/user-firebase-identity';
import { UserFirebaseIdentityFacade } from '../../../auth/user-firebase-identity/user-firebase-identity.facade';
import * as UserFirebaseIdentityActions from '../../../auth/user-firebase-identity/user-firebase-identity.actions';

@Component({
  selector: 'user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {
  
  auth$: Observable<any> = this.store.select('auth');
  userFirebaseIdentity$: Observable<UserFirebaseIdentity> = this.userFirebaseIdentityService.userFirebaseIdentity$;

  constructor(private store: Store<any>, private userFirebaseIdentityService: UserFirebaseIdentityFacade) { }

  ngOnInit() {
  }
  
  onSubmit($event) {
    this.userFirebaseIdentityService.updateUserFirebaseIdentityProfile($event);
  }
  
  loadUserFirebaseIdentity() {
    this.userFirebaseIdentityService.loadUserFirebaseIdentity();
  }

}
