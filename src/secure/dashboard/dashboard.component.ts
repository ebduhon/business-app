import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Router, ActivatedRoute, ParamMap, UrlSegment, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

import { Connectivity } from '../../auth/connectivity';
import { ConnectivityFacade } from '../../auth/connectivity/connectivity.facade';
import * as ConnectivityActions from '../../auth/connectivity/connectivity.actions';

import { Status } from '../../auth/status';
import { StatusFacade } from '../../auth/status/status.facade';
import * as StatusActions from '../../auth/status/status.actions';

import { UserFirebaseIdentity } from '../../auth/user-firebase-identity';
import { UserFirebaseIdentityFacade } from '../../auth/user-firebase-identity/user-firebase-identity.facade';
import * as UserFirebaseIdentityActions from '../../auth/user-firebase-identity/user-firebase-identity.actions';

import { UserPresence } from '../../auth/user-presence';
import { UserPresenceFacade } from '../../auth/user-presence/user-presence.facade';
import * as UserPresenceActions from '../../auth/user-presence/user-presence.actions';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  // Connectivity
  connectivityIsConnected$: Observable<any> = this.connectivityService.connectivityIsConnected$;
  
  // Status
  statusIsAuthenticated$: Observable<any> = this.statusService.statusIsAuthenticated$;
  
  // UserFirebaseIdentity
  // userFirebaseIdentity$: Observable<any> = this.userFirebaseIdentityService.userFirebaseIdentity$;
  userFirebaseIdentityUid$: Observable<any> = this.userFirebaseIdentityService.userFirebaseIdentityUid$;
  userFirebaseIdentityDisplayName$: Observable<any> = this.userFirebaseIdentityService.userFirebaseIdentityDisplayName$;
  userFirebaseIdentityPhotoURL$: Observable<any> = this.userFirebaseIdentityService.userFirebaseIdentityPhotoURL$;
  userFirebaseIdentityEmail$: Observable<any> = this.userFirebaseIdentityService.userFirebaseIdentityEmail$;
  userFirebaseIdentityEmailVerified$: Observable<any> = this.userFirebaseIdentityService.userFirebaseIdentityEmailVerified$;
  userFirebaseIdentityPhoneNumber$: Observable<any> = this.userFirebaseIdentityService.userFirebaseIdentityPhoneNumber$;
  userFirebaseIdentityRefreshToken$: Observable<any> = this.userFirebaseIdentityService.userFirebaseIdentityRefreshToken$;
  userFirebaseIdentityIsAnonymous$: Observable<any> = this.userFirebaseIdentityService.userFirebaseIdentityIsAnonymous$;
  
  usersRef: Observable<any>;
  currentUser: any;
  
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private afStore: AngularFirestore, private store: Store<any>, private connectivityService: ConnectivityFacade, private statusService: StatusFacade, private userFirebaseIdentityService: UserFirebaseIdentityFacade) {
    // this.userRef = this.afDb.object('development/users/3ZfYR0XIEsW2PgrEFXxzHvQvQgN2');
    
    /** https://angular.io/api/router/Router */
    /** https://angular.io/api/router/ParamMap */
    /** https://angular.io/api/router/ExtraOptions */
    
    
    /** https://angular.io/api/router/ActivatedRoute */
    // Each 'ActivatedRoute' in the 'RouterState' provides methods to traverse up and down the route tree to get information from parent, child and sibling routes.
    // snapshot: ActivedRouteSnapshot, The current snapshot of this route
    // url: Observable<UrlSegment[]>, An observable of the URL segments matched by this route
    // params: Observable<Params>, An observable of the matrix parameters scoped to this route  //NOTE: may be deprecated in the future use "paramMap" instead
    // queryParams: Observable<Params>, An observable of the query parameters shared by all the routes //NOTE: may be deprecated in the future use "queryParamMap" instead
    // fragment: Observable<string>, An observable of the URL fragment shared by all the routes
    // data: Observable<Data>, An observable of the static and resolved data of this route
    // outlet: string, The outlet name of the route. It's a constant
    // component: Type<any>|string|null, The component of the route. It's a constant
    // get routeConfig: Route|null, The configuration used to match this route
    // get root: ActivatedRoute, The root of the router state
    // get parent: ActivatedRoute|null, The parent of this route in the router state tree
    // get firstChild: ActivatedRoute|null, The first child of this route in the router state tree
    // get children: ActivatedRoute[], The children of this route in the router state tree
    // get pathFromRoot: ActivatedRoute[], The path from the root of the router state tree to this route
    // get paramMap: Observable<ParamMap>
    // get queryParamMap: Observable<ParamMap> 
    // toString(): string
    
    
    console.log("dashboard activatedRoute snapshot: ", activatedRoute.snapshot);
    
    activatedRoute.url.subscribe((url) => {
      console.log("dashboard activatedRoute url", url);
    });
    
    activatedRoute.url.subscribe((urlSegment: UrlSegment[]) => {
      console.log("dashboard activatedRoute urlSegment: ", urlSegment);
    });
    
    //NOTE: may be deprecated in the future use "paramMap" instead
    // activatedRoute.params.subscribe((params) => {
    //   console.log("dashboard activatedRoute params: ", params);
    // });
    
    //NOTE: may be deprecated in the future use "queryParamMap" instead
    // activatedRoute.queryParams.subscribe((queryParams) => {
    //   console.log("dashboard activatedRoute queryParams: ", queryParams);
    // });
    
    // In opposite to other observables, that are scoped to a particular route, query parameters and fragment are shared across multiple routes
    activatedRoute.fragment.subscribe((fragment) => {
      console.log("dashboard activatedRoute fragment: ", fragment);
    });
    
    activatedRoute.data.subscribe((d) => {
      console.log("dashboard activatedRoute data: ", d);
    });

    console.log("dashboard activatedRoute outlet: ", activatedRoute.outlet);
    
    console.log("dashboard activatedRoute component: ", activatedRoute.component);
    
    console.log("dashboard activatedRoute routeConfig: ", activatedRoute.routeConfig);
    
    console.log("dashboard activatedRoute root: ", activatedRoute.root);
    
    console.log("dashboard activatedRoute parent: ", activatedRoute.parent);
    
    console.log("dashboard activatedRoute firstChild: ", activatedRoute.firstChild);
    
    console.log("dashboard activatedRoute children: ", activatedRoute.children);
    
    console.log("dashboard activatedRoute pathFromRoot: ", activatedRoute.pathFromRoot);
    
    activatedRoute.paramMap.subscribe((paramMap) => {
      console.log("dashboard activatedRoute paramMap: ", paramMap);
    });
    
    // In opposite to other observables, that are scoped to a particular route, query parameters and fragment are shared across multiple routes
    activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      console.log("dashboard activatedRoute queryParamMap: ", queryParamMap);
    });
    
    console.log("dashboard router url: ", router.url);
    
  }

  ngOnInit() {
    console.log(this.statusService.loadStatusIsAuthenticated());
    //this.initFirestore();
  }
  
  


  // initFirestore() {
  //   this.afStore.collection('development-users').doc("3ZfYR0XIEsW2PgrEFXxzHvQvQgN2").set({ presenceType: 'online' });
  // }
  
  // initDatabase() {
  //   this.userRef.set({ 
  //     presenceType: 'online',  
      
  //   })
  // }

}
