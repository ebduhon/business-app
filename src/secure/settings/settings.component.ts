import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, UrlSegment, NavigationEnd } from '@angular/router';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    activatedRoute.url.subscribe((urlSegment: UrlSegment[]) => {
      console.log("settings activatedRoute urlSegment: ", urlSegment);
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
      console.log("settings activatedRoute fragment: ", fragment);
    });
    
    activatedRoute.data.subscribe((d) => {
      console.log("settings activatedRoute data: ", d);
    });

    console.log("settings activatedRoute outlet: ", activatedRoute.outlet);
    
    console.log("settings activatedRoute component: ", activatedRoute.component);
    
    console.log("settings activatedRoute routeConfig: ", activatedRoute.routeConfig);
    
    console.log("settings activatedRoute root: ", activatedRoute.root);
    
    console.log("settings activatedRoute parent: ", activatedRoute.parent);
    
    console.log("settings activatedRoute firstChild: ", activatedRoute.firstChild);
    
    console.log("settings activatedRoute children: ", activatedRoute.children);
    
    console.log("settings activatedRoute pathFromRoot: ", activatedRoute.pathFromRoot);
    
    activatedRoute.paramMap.subscribe((paramMap) => {
      console.log("settings activatedRoute paramMap: ", paramMap);
    });
    
    // In opposite to other observables, that are scoped to a particular route, query parameters and fragment are shared across multiple routes
    activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      console.log("settings activatedRoute queryParamMap: ", queryParamMap);
    });
  }

  ngOnInit() {
  }

}
