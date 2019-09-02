import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, ParamMap, UrlSegment } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { UiWindow } from '../framework-store/ui-window';
import { UiWindowFacade } from '../framework-store/ui-window/ui-window.facade';
import * as UiWindowActions from '../framework-store/ui-window/ui-window.actions';

//TODO: import { AppConfig } from './config/app.config';
//TODO: modify the implementation of the titleService in the context of application configuration and @ngrx/router-store, rather than the native @angular/router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'resizeUiWindow($event)'
  }
})
export class AppComponent implements OnInit {

  
  uiWindowHeight$ = this.uiWindowService.uiWindowHeight$;
  uiWindowWidth$ = this.uiWindowService.uiWindowWidth$;
  
  private title: string;
  
  constructor(
    private store: Store<any>,
    private uiWindowService: UiWindowFacade,
    private location: Location, 
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private titleService: Title) {
    // this.router.navigate(['', 'public']);
    //location.replaceState('public');
    
    activatedRoute.url.subscribe((urlSegment: UrlSegment[]) => {
      console.log("activatedRoute urlSegment: ", urlSegment);
    });
    
    //NOTE: may be deprecated in the future use "paramMap" instead
    // activatedRoute.params.subscribe((params) => {
    //   console.log("dashboard activatedRoute params: ", params);
    // });
    
    //NOTE: may be deprecated in the future use "queryParamMap" instead
    // activatedRoute.queryParams.subscribe((queryParams) => {
    //   console.log("dashboard activatedRoute queryParams: ", queryParams);
    // });
    
    activatedRoute.data.subscribe((d) => {
      console.log("activatedRoute data: ", d);
    });
    
    activatedRoute.paramMap.subscribe((paramMap) => {
      console.log("dashboard activatedRoute paramMap: ", paramMap);
    });
    
    activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      console.log("dashboard activatedRoute queryParamMap: ", queryParamMap);
    });
  
  }
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  
  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }
  
  resizeUiWindow(event) {
    this.uiWindowService.resizeUiWindow(event);
  }
  
}
