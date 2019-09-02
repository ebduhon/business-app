import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

import { Status } from '../../auth/status';
import { StatusFacade } from '../../auth/status/status.facade';
import * as StatusActions from '../../auth/status/status.actions';



//TODO: isAuth service / User service
//TODO: review nav-app implementation of auth guard service

@Injectable()
export class SecureAuthGuardService implements CanActivate, CanActivateChild, CanLoad {

  statusIsAuthenticated$: Observable<any> = this.statusService.statusIsAuthenticated$;
  private isAuthenticated: boolean;

  constructor(private router: Router, private store: Store<any>, private statusService: StatusFacade) {

  }
  
  // temporarily disable guards 
  // canActivate(): Observable<boolean> | boolean {
  //   return this.statusService.checkStatusIsAuthenticated();
  // }
  
  // canActivateChild() : Observable<boolean> | boolean {
  //   return this.canActivate();
  // }
  
  canActivate(): boolean {
    //TODO: conditional navigation logic based on authorization result
    return true;
  }

  canActivateChild() : boolean {
    return this.canActivate();
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    // development, replace with actual logic
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    // development, replace with actual logic to check state and validity of credentials, etc.
    // return true to enable canLoad development testing, false to disable
    return true;
  }
}