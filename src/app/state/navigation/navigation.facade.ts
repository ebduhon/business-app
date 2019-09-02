import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions } from '@ngrx/effects';

import * as NavigationActions from './navigation.actions';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class NavigationFacade {
  @Effect({ dispatch: false })
  navigate$ = this.actions$.ofType(NavigationActions.GO)
    .map((action: NavigationActions.Go) => action.payload)
    .do(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras })
    });
    
  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.ofType(NavigationActions.BACK)
    .do(() => this.location.back());
  
  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.ofType(NavigationActions.FORWARD)
    .do(() => this.location.forward());
  
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}
}