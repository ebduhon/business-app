import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, Router } from '@angular/router';

@Injectable()
export class DevHcoReceiptAuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  
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