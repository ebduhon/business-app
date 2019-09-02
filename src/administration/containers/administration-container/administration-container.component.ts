import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Account } from '../../account';
import { AccountFacade } from '../../account/account.facade';
import * as AccountActions from '../../account/account.actions';

@Component({
  selector: 'administration-container',
  templateUrl: './administration-container.component.html',
  styleUrls: ['./administration-container.component.scss']
})
export class AdministrationContainerComponent implements OnInit {
  
  accountState$ = this.accountService.accountState$;
  allAccounts$ = this.accountService.allAccounts$;

  constructor(
    private store: Store<any>,
    private accountService: AccountFacade
  ) {}

  ngOnInit() {
  }
  
  loadAccounts() {
    this.accountService.loadAccounts();
  }

}
