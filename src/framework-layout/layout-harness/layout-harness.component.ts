import { Component, OnInit, Input, ChangeDetectionStrategy, ViewChild, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Connectivity } from '../../auth/connectivity';
import { ConnectivityFacade } from '../../auth/connectivity/connectivity.facade';
import * as ConnectivityActions from '../../auth/connectivity/connectivity.actions';

import { LoadingSpinner } from '../../framework-store/loading-spinner';
import { LoadingSpinnerFacade } from '../../framework-store/loading-spinner/loading-spinner.facade';
import * as LoadingSpinnerActions from '../../framework-store/loading-spinner/loading-spinner.actions';

import { ProgressBar } from '../../framework-store/progress-bar';
import { ProgressBarFacade } from '../../framework-store/progress-bar/progress-bar.facade';
import * as ProgressBarActions from '../../framework-store/progress-bar/progress-bar.actions';

import { ProgressSpinner } from '../../framework-store/progress-spinner';
import { ProgressSpinnerFacade } from '../../framework-store/progress-spinner/progress-spinner.facade';
import * as ProgressSpinnerActions from '../../framework-store/progress-spinner/progress-spinner.actions';

import { SecondaryToolbar } from '../../framework-store/secondary-toolbar';
import { SecondaryToolbarFacade } from '../../framework-store/secondary-toolbar/secondary-toolbar.facade';
import * as SecondaryToolbarActions from '../../framework-store/secondary-toolbar/secondary-toolbar.actions';

import { Sidenav } from '../../framework-store/sidenav';
import { SidenavFacade } from '../../framework-store/sidenav/sidenav.facade';
import * as SidenavActions from '../../framework-store/sidenav/sidenav.actions';

import { StatusBar } from '../../framework-store/status-bar';
import { StatusBarFacade } from '../../framework-store/status-bar/status-bar.facade';
import * as StatusBarActions from '../../framework-store/status-bar/status-bar.actions';

import { Tabnav } from '../../framework-store/tabnav';
import { TabnavFacade } from '../../framework-store/tabnav/tabnav.facade';
import * as TabnavActions from '../../framework-store/tabnav/tabnav.actions';

import { TabnavComponent } from '../tabnav/tabnav.component';
import { TabnavAnchorDirective } from '../tabnav-anchor/tabnav-anchor.directive';

import { UserPresence } from '../../auth/user-presence';
import { UserPresenceFacade } from '../../auth/user-presence/user-presence.facade';
import * as UserPresenceActions from '../../auth/user-presence/user-presence.actions';

@Component({
  moduleId: module.id,
  selector: 'layout-harness',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './layout-harness.component.html',
  styleUrls: ['./layout-harness.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('statusBarHarnessAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-32px)' }),
        animate('300ms', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)'}),
        animate('300ms', style({ transform: 'translateY(-32px)' }))
      ])
    ])
  ],
  entryComponents: [
    TabnavComponent
  ],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class LayoutHarnessComponent implements OnInit {
  
  //Start: mat-sidenav properties
  fixed = false;
  coverHeader = false;
  showHeader = false;
  showFooter = false;
  modeIndex = 0;
  get mode() { return ['side', 'over', 'push'][this.modeIndex]; }
  get fixedTop() { return this.fixed && this.showHeader && !this.coverHeader ? 64 : 0; }
  get fixedBottom() { return this.fixed && this.showFooter && !this.coverHeader ? 64 : 0; }
  
  // development
  currentMode: 'over' | 'push' | 'side' = 'over';
  currentClasses: any;
  fillerContent = Array(30);
  
  //End: mat-sidenav properties
  
  
  @ViewChild(TabnavAnchorDirective) tabnavAnchor: TabnavAnchorDirective;
  
  @Input()
  frameworkConfigSettings: any;
  
  connectivityIsActivated$ = this.connectivityService.connectivityIsActivated$;
  connectivityIsVisible$ = this.connectivityService.connectivityIsVisible$;
  
  loadingSpinnerIsActivated$ = this.loadingSpinnerService.loadingSpinnerIsActivated$;
  loadingSpinnerIsVisible$ = this.loadingSpinnerService.loadingSpinnerIsVisible$;
  
  progressBarIsActivated$ = this.progressBarService.progressBarIsActivated$;
  progressBarIsVisible$ = this.progressBarService.progressBarIsVisible$;
  
  progressSpinnerIsActivated$ = this.progressSpinnerService.progressSpinnerIsActivated$;
  progressSpinnerIsVisible$ = this.progressSpinnerService.progressSpinnerIsVisible$;
  
  secondaryToolbarIsActivated$ = this.secondaryToolbarService.secondaryToolbarIsActivated$;
  secondaryToolbarIsVisible$ = this.secondaryToolbarService.secondaryToolbarIsVisible$;
  
  sidenavIsActivated$ = this.sidenavService.sidenavIsActivated$;
  sidenavIsVisible$ = this.sidenavService.sidenavIsVisible$;
  sidenavMode$ = this.sidenavService.sidenavMode$;
  sidenavIsOpened$ = this.sidenavService.sidenavIsOpened$;
  sidenavIsCovered$ = this.sidenavService.sidenavIsCovered$;
  sidenavIsFixed$ = this.sidenavService.sidenavIsFixed$;
  sidenavIsFixedTopGap$ = this.sidenavService.sidenavIsFixedTopGap$;
  sidenavIsFixedBottomGap$ = this.sidenavService.sidenavIsFixedBottomGap$;
  
  statusBar$ = this.statusBarService.statusBar$;
  statusBarIsActivated$ = this.statusBarService.statusBarIsActivated$;
  statusBarIsVisible$ = this.statusBarService.statusBarIsVisible$;
  
  tabnav$ = this.tabnavService.tabnav$;
  tabnavIsActivated$ = this.tabnavService.tabnavIsActivated$;
  tabnavIsVisible$ = this.tabnavService.tabnavIsVisible$;
  
  userPresenceIsActivated$ = this.userPresenceService.userPresenceIsActivated$;
  userPresenceIsVisible$ = this.userPresenceService.userPresenceIsVisible$;
  
  constructor(
    private store: Store<any>, 
    private connectivityService: ConnectivityFacade, 
    private loadingSpinnerService: LoadingSpinnerFacade, 
    private progressBarService: ProgressBarFacade, 
    private progressSpinnerService: ProgressSpinnerFacade,
    private secondaryToolbarService: SecondaryToolbarFacade, 
    private sidenavService: SidenavFacade, 
    private statusBarService: StatusBarFacade,
    private tabnavService: TabnavFacade,
    private userPresenceService: UserPresenceFacade
  ) { }
  
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
  
  // development
  simulateConnected() {
    let simulateConnectedConfig = {
      connected: true
    };
    this.connectivityService.configureConnectivity(simulateConnectedConfig)
  }
  
  simulateDisconnected() {
    let simulateDisconnectedConfig = {
      connected: false
    };
    this.connectivityService.configureConnectivity(simulateDisconnectedConfig);
  }
  
  //Start: LoadingSpinner methods
  
  //TODO: related to framework user-interface configuration options
  //TODO: configureLoadingSpinner()
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  activateLoadingSpinner() {
    this.loadingSpinnerService.activateLoadingSpinner();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  deactiveLoadingSpinner() {
    this.loadingSpinnerService.deactivateLoadingSpinner();
  }
  
  openLoadingSpinner() {
    this.loadingSpinnerService.openLoadingSpinner();
  }
  
  closeLoadingSpinner() {
    this.loadingSpinnerService.closeLoadingSpinner();
  }
  //End: LoadingSpinner methods
  
  //Start: ProgressBar methods
  
  //TODO: related to framework user-interface configuration options
  configureProgressBar() {
    //development
    let progressBarConfig = {
      activated: true,
      visible: false,
      color: 'accent',
      mode: 'query'
    };
    
    this.progressBarService.configureProgressBar(progressBarConfig);
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  activateProgressBar() {
    this.progressBarService.activateProgressBar();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  deactivateProgressBar() {
    this.progressBarService.deactivateProgressBar();
  }
  
  showProgressBar() {
    this.progressBarService.showProgressBar();
  }
  
  hideProgressBar() {
    this.progressBarService.hideProgressBar();
  }
  
  stepProgressBarValue(progressBarValue) {
    this.progressBarService.stepProgressBarValue(progressBarValue);
  }
  
  stepProgressBarBuffer(progressBarBufferValue) {
    this.progressBarService.stepProgressBarBuffer(progressBarBufferValue);
  }
  
  //End: ProgressBar methods
  
  //Start: ProgressSpinner methods
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  configureProgressSpinner() {
    let progressSpinnerConfig = {
      activated: true,
      visible: false,
      color: 'accent',
      mode: 'indeterminate',
      value: 50,
      strokeWidth: 4,
      diameter: 50
    };
    
    this.progressSpinnerService.configureProgressSpinner(progressSpinnerConfig);
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  activateProgressSpinner() {
    this.progressSpinnerService.activateProgressSpinner();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  deactivateProgressSpinner() {
    this.progressSpinnerService.deactivateProgressSpinner();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  showProgressSpinner() {
    this.progressSpinnerService.showProgressSpinner();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  hideProgressSpinner() {
    this.progressSpinnerService.hideProgressSpinner();
  }
  
  stepProgressSpinnerValue(progressSpinnerValue) {
    this.progressSpinnerService.stepProgressSpinnerValue(progressSpinnerValue);
  }
  //End: ProgressSpinner methods
  
  //Start: SecondaryToolbar methods
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  configureSecondaryToolbar() {
    //development
    let secondaryToolbarConfig = {
      activated: true,
      visible: true
    };
    
    this.secondaryToolbarService.configureSecondaryToolbar(secondaryToolbarConfig);
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  activateSecondaryToolbar() {
    this.secondaryToolbarService.activateSecondaryToolbar();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  deactivateSecondaryToolbar() {
    this.secondaryToolbarService.deactivateSecondaryToolbar();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  showSecondaryToolbar() {
    this.secondaryToolbarService.showSecondaryToolbar();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  hideSecondaryToolbar() {
    this.secondaryToolbarService.hideSecondaryToolbar();
  }
  //End: SecondaryToolbar methods

  //Start: Sidenav methods
  
  //TODO: related to framework user-interface configuration options
  configureSidenav() {
    //development
    let sidenavConfig = {
      activated: true,
      visible: true,
      mode: 'over',
      opened: false,
      covered: false,
      fixed: false
    };
    
    this.sidenavService.configureSidenav(sidenavConfig);
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  activateSidenav() {
    this.sidenavService.activateSidenav();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  deactivateSidenav() {
    this.sidenavService.deactivateSidenav();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  showSidenav() {
    this.sidenavService.showSidenav();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  hideSidenav() {
    this.sidenavService.hideSidenav();
  }
  
  toggleSidenav() {
    this.sidenavService.toggleSidenav();
  }
  
  openSidenav() {
    this.sidenavService.openSidenav();
  }
  
  closeSidenav() {
    this.sidenavService.closeSidenav();
  }
  
  //TODO: refactor
  logout() {
    this.closeSidenav();
    
    //TODO: dispatch Auth.Logout
  }
  //End: Sidenav methods
  
  
  //Start: StatusBar methods
  
  /**
   * Note: StatusBar methods if the framework configuration is activating the status bar,
   * then it should also be visible, coordinate calling actions:
   * new StatusBarActions.ConfigureStatusBar({ activated: true }) && new StatusBarActions.ShowStatusBar({ visible: true })
   * simulataneously for an optimal user interface experience regarding animations
   */
  
  //TODO: related to framework user-interface configuration options
  configureStatusBar() {
    //development
    let statusBarConfig = {
      activated: true,
      visible: true
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
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  showStatusBar() {
    this.statusBarService.showStatusBar();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  hideStatusBar() {
    this.statusBarService.hideStatusBar();
  }
  //End: StatusBar methods
  
  //Start: Tabnav methods
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  configureTabnav() {
    //development
    let tabnavConfig = {
      activated: true,
      visible: true
    };
    
    this.tabnavService.configureTabnav(tabnavConfig);
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  activateTabnav() {
    this.tabnavService.activateTabnav();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  deactivateTabnav() {
    this.tabnavService.deactivateTabnav();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  showTabnav() {
    this.tabnavService.showTabnav();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  hideTabnav() {
    this.tabnavService.hideTabnav();
  }
  
  //TODO: move to ui-config, related to framework user-interface configuration options
  loadTabnav() {
    this.tabnavService.loadTabnav();
  }
  
  
  // TabnavAnchorDirective method
  createTabnav() {
    this.tabnavAnchor.createTabnav(TabnavComponent);
  }
  
  checkTabnavConfig() {
    
    this.tabnavIsActivated$.subscribe((data) => {
      console.log(data);
      return data;
    });

    this.tabnavIsVisible$.subscribe((data) => {
      console.log(data);
      return data;
    });
    
    
  }
  
  
  //End: Tabnav methods
  
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
  
  simulateOnline() {
    let simulateOnlineConfig = {
      presenceType: 'online'
    };
    
    this.userPresenceService.configureUserPresence(simulateOnlineConfig);
  }
  
  simulateAway() {
    let simulateAwayConfig = {
      presenceType: 'away'
    };
    
    this.userPresenceService.configureUserPresence(simulateAwayConfig);
  }
  
  simulateOffline() {
    let simulateOfflineConfig = {
      presenceType: 'offline'
    };
    
    this.userPresenceService.configureUserPresence(simulateOfflineConfig);
  }
  
  //End: UserPresence methods
  
  //Start:  Custom mat-sidenav methods
  
  //TODO: refactor
  setCurrentClasses() {
    
    switch(this.currentMode) {
      case 'over':
        return this.currentClasses = {
        'sidenav-mode-over': true,
        'sidenav-mode-push': false,
        'sidenav-mode-side': false
      };
      
      case 'push':
        return this.currentClasses = {
        'sidenav-mode-over': false,
        'sidenav-mode-push': true,
        'sidenav-mode-side': false
      };
      
      case 'side':
        return this.currentClasses = {
        'sidenav-mode-over': false,
        'sidenav-mode-push': false,
        'sidenav-mode-side': true
      };
      
      default:
        return this.currentClasses = null;
    }
  }

  //End: Custom mat-sidenav methods

  ngOnInit() {
    
    //development
    //this.configureConnectivity();
    
    //development
    //this.openLoadingSpinner();
    
    //development
    this.configureProgressBar();
    
    //development
    this.configureProgressSpinner();
    
    //development
    this.configureSecondaryToolbar();
    
    
    //development
    this.configureStatusBar();
    
    //development
    this.configureTabnav();
    
    
    //development
    //this.checkTabnavConfig();
    
    this.setCurrentClasses();
    this.showHeader = true;
    this.showFooter = true;
    
    // temp
    this.currentMode = 'push';

  }

}
