import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


//TODO: isAuth service / User service
//TODO: review nav-app implementation of auth guard service

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router) {

  }

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