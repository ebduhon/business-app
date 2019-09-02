import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { UserPresence } from '../../../auth/user-presence';
import { UserPresenceFacade } from '../../../auth/user-presence/user-presence.facade';
import * as UserPresenceActions from '../../../auth/user-presence/user-presence.actions';

@Component({
  selector: 'user-presence-harness',
  templateUrl: './user-presence-harness.component.html',
  styleUrls: ['./user-presence-harness.component.scss']
})
export class UserPresenceHarnessComponent implements OnInit, OnChanges {
  
  userPresence$: Observable<UserPresence> = this.userPresenceService.userPresence$;
  userPresencePresenceType$ = this.userPresenceService.userPresencePresenceType$;
  
  position = 'before';
  message = 'User presence';

  constructor(private store: Store<any>, private userPresenceService: UserPresenceFacade) { }

  ngOnInit() {
  }
  
  ngOnChanges() {
    this.userPresencePresenceType$
      .subscribe((presenceType) => {
        this.message = presenceType;
      });
  }

}
