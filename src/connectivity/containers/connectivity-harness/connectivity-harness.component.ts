import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Connectivity } from '../../../auth/connectivity';
import { ConnectivityFacade } from '../../../auth/connectivity/connectivity.facade';
import * as ConnectivityActions from '../../../auth/connectivity/connectivity.actions';

@Component({
  selector: 'connectivity-harness',
  templateUrl: './connectivity-harness.component.html',
  styleUrls: ['./connectivity-harness.component.scss']
})
export class ConnectivityHarnessComponent implements OnInit {
  
  connectivity$: Observable<Connectivity> = this.connectivityService.connectivity$;
  connectivityIsConnected$ = this.connectivityService.connectivityIsConnected$;
  
  position = 'before';
  message = 'connectivity';

  constructor(private store: Store<any>, private connectivityService: ConnectivityFacade) { }

  ngOnInit() {
  }

}
