import { Injectable } from '@angular/core';
import { Router, NavigationExtras, ParamMap, ActivatedRoute } from '@angular/router';


import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireAction } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { asap } from 'rxjs/scheduler/asap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/observeOn';

import 'rxjs/add/observable/of';


/** https://angular.io/api/router/Router#navigate */
/** https://angular.io/api/router/NavigationExtras */
/** https://angular.io/api/router/RouterLink */

export class DevNavItem {
  constructor(public id: number | string, public name: string, public filterType?: string|null) {}
}

// const DEV_NAV_ITEMS = [
//   new DevNavItem(1, 'dev-nav-item-1'),
//   new DevNavItem(2, 'dev-nav-item-2'),
//   new DevNavItem(3, 'dev-nav-item-3'),
//   new DevNavItem(4, 'dev-nav-item-4')
// ];

//TODO: Required Query Parameters Object
//TODO: Optional Query Parameters Object


@Injectable()
export class DevNavData1Service {
  
  devNavItemsList$: any;
  devNavItems$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  filterType$: BehaviorSubject<string|null>;
  
  constructor(private afDb: AngularFireDatabase, private router: Router, private activatedRoute: ActivatedRoute) {
    this.filterType$ = new BehaviorSubject(null);
    // this.devNavListRef = afDb.list('development/dev-nav-list');
    this.devNavItems$ = this.filterType$.switchMap(filterType => afDb.list('/development/dev-nav-list', ref => filterType ? ref.orderByChild('filterType').equalTo(filterType) : ref).snapshotChanges()); 
    
    activatedRoute.paramMap.subscribe((paramMap) => {
      console.log("dev-nav-data-1.service activatedRoute paramMap: ", paramMap);
    });
    
    // In opposite to other observables, that are scoped to a particular route, query parameters and fragment are shared across multiple routes
    activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      console.log("dev-nav-data-1.service activatedRoute queryParamMap: ", queryParamMap);
    });
    
    
  }
  
  filterBy(filterType: string|null) {
    this.filterType$.next(filterType);
  }
  
  // getDevNavItems() {
  //   return Observable.of(DEV_NAV_ITEMS);
  // }

  // getDevNavItem(id: number | string) {
  //   return this.getDevNavItems()
  //     // (+) before `id` turns the string into a number
  //     .map(devNavItems => devNavItems.find(devNavItem => devNavItem.id === +id));
  // }
  
  createDevNavItemKey() {
    const devNavItemDefault = new DevNavItem('', '', null);
    const devNavItemKey = this.afDb.list('/development/dev-nav-list').push(devNavItemDefault).key;
    return this.afDb.object(`/development/dev-nav-list/${devNavItemKey}`);
  }
  
  updateDevNavItem(key: string, data: any) {
    return this.afDb.object(`/development/dev-nav-list/${key}`).update(data);
  }
  
  listDevNavItems() {
    return this.devNavItemsList$ = this.afDb.list('/development/dev-nav-list');
  }
  


}