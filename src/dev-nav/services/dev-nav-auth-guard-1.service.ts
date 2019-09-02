import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  CanActivate, 
  CanActivateChild,
  NavigationExtras,
  CanLoad, 
  Route, 
  Router 
} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

//TODO: isAuth service / User service
//TODO: review nav-app implementation of auth guard service

@Injectable()
export class DevNavAuthGuard1Service implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router) {

  }

  /** https://angular.io/api/router/CanActivate */
  canActivate(): boolean {
    //TODO: conditional navigation logic based on authorization result
    return true;
  }
  
  /** https://angular.io/api/router/CanActivateChild */
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
  
  //TODO:
  // checkAuth(url: string): boolean {
  //   // if (this.authService.authorization) { return true; }
    
  //   // Store the attempted URL for redirecting
  //   // this.authService.redirectUrl = url;
    
  //   // Create a dummy session id
  //   // let sessionId = 123456789;
    
  //   // Set our navigation extras object
  //   // let navigationExtras: NavigationExtras = {
  //   //   queryParams: { 'sesion_id': sessionId },
  //   //   fragment: 'anchor'
  //   // };
    
  //   // Navigate to the sign-in page with extras
  //   // this.router.navigate(['/sign-in'], navigationExtras);
  //   // return false;
    
    
  // }
}