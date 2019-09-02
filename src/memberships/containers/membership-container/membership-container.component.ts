
// start version 1

// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
// import * as MembershipActions from '../../actions/membership.actions';
// import * as fromMembership from '../../reducers/membership.reducer';

// end version 1

// start version 2

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromMemberships from '../../reducers';
import * as MembershipActions from '../../actions/membership.actions';
import { Membership } from '../../models/membership.model';


// end version 2

// start version 3

// import { MembershipsState } from '../../memberships.state';

// end version 3

@Component({
  selector: 'membership-container',
  templateUrl: './membership-container.component.html',
  styleUrls: ['./membership-container.component.scss']
})
export class MembershipContainerComponent implements OnInit {
  
  // start version 1
  
  // memberships: Observable<any>;

  // constructor(private store: Store<fromMembership.State>) { }

  // ngOnInit() {
  //   //TODO: move to facade / effects / service
  //   this.memberships = this.store.select(fromMembership.selectAll);
  //   this.store.dispatch(new MembershipActions.Query());
  // }
  
  // //TODO: move to facade / effects / service
  // updateMembership(id, status) {
  //   this.store.dispatch(new MembershipActions.Update(id, { status }));
  // }
  
  // end version 1
  
  // start version 2
  
  memberships$: Observable<Membership[]>;

  constructor(private store: Store<fromMemberships.State>) { }

  ngOnInit() {
    //TODO: move to facade / effects / service
    
    this.memberships$ = this.store.select(fromMemberships.getAllMemberships);
    this.store.dispatch(new MembershipActions.Query());
  }
  
  //TODO: move to facade / effects / service
  updateMembership(id, status) {
    this.store.dispatch(new MembershipActions.Update(id, { status }));
  }
  // end version 2
  

}
