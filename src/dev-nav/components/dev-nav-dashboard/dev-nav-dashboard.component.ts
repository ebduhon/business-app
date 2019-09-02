import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, ParamMap, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { DevNavData1Service } from '../../services/dev-nav-data-1.service';

@Component({
  selector: 'dev-nav-dashboard',
  templateUrl: './dev-nav-dashboard.component.html',
  styleUrls: ['./dev-nav-dashboard.component.scss']
})
export class DevNavDashboardComponent implements OnInit {
  
  
  id$: any;
  private selectedId: number;
  
  devNavItemsList$: any;
  devNavItems$: any;
  filterType$: any;

  constructor(
    private devNavData1Service: DevNavData1Service,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 

    activatedRoute.paramMap.subscribe((paramMap) => {
      console.log("dashboard activatedRoute paramMap: ", paramMap);
    });
    
    // In opposite to other observables, that are scoped to a particular route, query parameters and fragment are shared across multiple routes
    activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      console.log("dev-nav-dashboard activatedRoute queryParamMap: ", queryParamMap);
    });

  }

  ngOnInit() {
    
    this.devNavItemsList$ = this.devNavData1Service.devNavItemsList$;
    this.devNavItems$ = this.devNavData1Service.devNavItems$;
    this.filterType$ = this.devNavData1Service.filterType$;
    // this.id$ = this.activatedRoute.paramMap
    //   .switchMap((params: ParamMap) => {
    //     return this.devNavData1Service.getDevNavItem(params.get('id'));
    //   });
    
    this.id$ = this.activatedRoute.paramMap
      .map((params) => {
        return params.get('id') || 'None';
      });
  }
  
  filterBy(filterType: string|null) {
    this.devNavData1Service.filterBy(filterType);
  }
  
  createDevNavItemKey() {
    this.devNavData1Service.createDevNavItemKey();
  }
  
  updateDevNavItem(key: string, data: any) {
    this.devNavData1Service.updateDevNavItem(key, data);
  }
  
  listDevNavItems() {
    this.devNavData1Service.listDevNavItems();
  }
  
  /** start test 0 */
  
  // // works
  // navigateAuxiliary() {
  //   let auxiliaryId = 1;
    
  //   // works, specifies parent route
  //   // this.router.navigate(['/dev-nav/dashboard', { outlets: {'auxiliary': [auxiliaryId], 'ancillary': ['none']}}]);
    
  //   // works, specifies parent route, relativeTo the currently activated route
  //   // this.router.navigate(['/dev-nav/dashboard', { outlets: {'auxiliary': [auxiliaryId], 'ancillary': ['none']}}], { relativeTo: this.activatedRoute });
    
  //   // works, relativeTo the currently activated route
  //   // this.router.navigate([{ outlets: {'auxiliary': [auxiliaryId], 'ancillary': null}}], { relativeTo: this.activatedRoute });
    
  //   this.router.navigate([{ outlets: { 'auxiliary': [auxiliaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // // works
  // navigateAncillary() {
  //   let ancillaryId = 2;
    
  //   // works, specifies parent route
  //   // this.router.navigate(['/dev-nav/dashboard', { outlets: {'auxiliary': ['none'], 'ancillary': [ancillaryId]}}]);
    
  //   // works, specifies parent route, relativeTo the currently activated route
  //   // this.router.navigate(['/dev-nav/dashboard', { outlets: {'auxiliary': ['none'], 'ancillary': [ancillaryId]}}], { relativeTo: this.activatedRoute });
    
  //   // works, relativeTo the currently activated route
  //   // this.router.navigate([{ outlets: {'auxiliary': null, 'ancillary': [ancillaryId]}}], { relativeTo: this.activatedRoute });
    
  //   this.router.navigate([{ outlets: { 'ancillary': [ancillaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // //[routerLink]="['/secure/dashboard', { outlets: { secondary: ['settings'] }}]"
  
  // // works
  // closeOutlets() {
  //   this.router.navigate(['/dev-nav/dashboard', { outlets: {'auxiliary': null, 'ancillary': null}}]);
  // }
  
  /** end test 0 */
  
  /** start test 1 */
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10 
  
  // works
  navigateAuxiliary(auxiliaryId) {
    this.router.navigate([{ outlets: { 'auxiliary': [auxiliaryId] }}], { relativeTo: this.activatedRoute });
  }
  
  // works
  navigateAncillary(ancillaryId) {
    this.router.navigate([{ outlets: { 'ancillary': [ancillaryId] }}], { relativeTo: this.activatedRoute });
  }
  
  // closeOutlets() {
  //   this.router.navigate(['/dev-nav/dashboard', { outlets: {'auxiliary': null, 'ancillary': null}}]);
  // }
  
  // works
  closeAuxiliaryOutlet() {
    this.router.navigate([{ outlets: { 'auxiliary': null }}], { relativeTo: this.activatedRoute });
  }
  
  // works
  closeAncillaryOutlet() {
    this.router.navigate([{ outlets: { 'ancillary': null }}], { relativeTo: this.activatedRoute });
  }
  
  /** end test 1 */
  
  /** start test 2 */
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10 
  
  // works
  // navigateAuxiliary(auxiliaryId) {
  //   this.router.navigate([{ outlets: { 'auxiliary': [auxiliaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // works
  // navigateAncillary(ancillaryId) {
  //   this.router.navigate([{ outlets: { 'ancillary': [ancillaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // works
  // closeAuxiliaryOutlet() {
  //   this.router.navigate([{ outlets: { 'auxiliary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  // works
  // closeAncillaryOutlet() {
  //   this.router.navigate([{ outlets: { 'ancillary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  /** end test 2 */

}
