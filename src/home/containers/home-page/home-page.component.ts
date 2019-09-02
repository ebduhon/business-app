import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

import { Status } from '../../../auth/status';
import { StatusFacade } from '../../../auth/status/status.facade';
import * as StatusActions from '../../../auth/status/status.actions';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  statusIsAuthenticated$: Observable<any> = this.statusService.statusIsAuthenticated$;

  constructor(private store: Store<any>, private statusService: StatusFacade) { }

  ngOnInit() {

  }

}
