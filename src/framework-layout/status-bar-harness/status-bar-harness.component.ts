import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { StatusBar } from '../../framework-store/status-bar';
import { StatusBarFacade } from '../../framework-store/status-bar/status-bar.facade';
import * as StatusBarActions from '../../framework-store/status-bar/status-bar.actions';

import { Connectivity } from '../../auth/connectivity';
import { ConnectivityFacade } from '../../auth/connectivity/connectivity.facade';
import * as ConnectivityActions from '../../auth/connectivity/connectivity.actions';

import { UserPresence } from '../../auth/user-presence';
import { UserPresenceFacade } from '../../auth/user-presence/user-presence.facade';
import * as UserPresenceActions from '../../auth/user-presence/user-presence.actions';

@Component({
  selector: 'status-bar-harness',
  templateUrl: './status-bar-harness.component.html',
  styleUrls: ['./status-bar-harness.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ]),
    trigger('statusBarAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-32px)' }),
        animate('300ms', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)'}),
        animate('300ms', style({ transform: 'translateY(-32px)' }))
      ])
      
    ])
  ]
})
export class StatusBarHarnessComponent implements OnInit {

  statusBar$ = this.statusBarService.statusBar$;
  
  connectivityIsActivated$ = this.connectivityService.connectivityIsActivated$;
  connectivityIsVisible$ = this.connectivityService.connectivityIsVisible$;
  
  userPresenceIsActivated$ = this.userPresenceService.userPresenceIsActivated$;
  userPresenceIsVisible$ = this.userPresenceService.userPresenceIsVisible$;
  
  constructor(private store: Store<any>, private statusBarService: StatusBarFacade, private connectivityService: ConnectivityFacade, private userPresenceService: UserPresenceFacade) { }
  
  logStatusBarAnimation($event) {
    console.log($event);
  }
  
  ngOnInit() {
    //development
    //this.configureConnectivity();
    
    //development
    this.configureUserPresence();
    
    //development
    //this.configureStatusBar();
  }
  
  ngOnChanges() {

  }
  
  ngOnDestroy() {
    
  }
  
  //Start: Connectivity methods
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  configureConnectivity() {
    //development
    let connectivityConfig = {
      activated: true,
      visible: true
    };
    
    this.connectivityService.configureConnectivity(connectivityConfig);
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  activateConnectivity() {
    this.connectivityService.activateConnectivity();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  deactivateConnectivity() {
    this.connectivityService.deactivateConnectivity();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  showConnectivity() {
    this.connectivityService.showConnectivity();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  hideConnectivity() {
    this.connectivityService.hideConnectivity();
  }
  //End: Connectivity methods
  
  //Start: UserPresence methods
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  configureUserPresence() {
    //development
    let userPresenceConfig = {
      activated: true,
      visible: true
    };
    
    this.userPresenceService.configureUserPresence(userPresenceConfig);
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  activateUserPresence() {
    this.userPresenceService.activateUserPresence();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  deactivateUserPresence() {
    this.userPresenceService.deactivateUserPresence();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  showUserPresence() {
    this.userPresenceService.showUserPresence();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  hideUserPresence() {
    this.userPresenceService.hideUserPresence();
  }
  
  //End: UserPresence methods
  
  //Start: StatusBar methods
  
  //TODO: related to framework user-interface configuration options
  configureStatusBar() {
    //development
    let statusBarConfig = {
      activated: true,
      visible: false
    };
    
    this.statusBarService.configureStatusBar(statusBarConfig);
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  activateStatusBar() {
    this.statusBarService.activateStatusBar();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  deactivateStatusBar() {
    this.statusBarService.deactivateStatusBar();
  }
  
  showStatusBar() {
    this.statusBarService.showStatusBar();
  }
  
  hideStatusBar() {
    this.statusBarService.hideStatusBar();
  }
  //End: StatusBar methods
  

}
