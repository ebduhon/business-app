import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationExtras, ParamMap, Router, RouterState, RouterStateSnapshot, UrlSegment } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'dev-nav-container',
  templateUrl: './dev-nav-container.component.html',
  styleUrls: ['./dev-nav-container.component.scss']
})
export class DevNavContainerComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    
    const state: RouterState = router.routerState;
    console.log("dev-nav-container router state: ", state);
    
    const snapshot: RouterStateSnapshot = state.snapshot;
    console.log("dev-nav-container router snapshot: ", snapshot);
    
    const root: ActivatedRouteSnapshot = snapshot.root;
    console.log("dev-nav-container router root: ", root);
    
    const child = root.firstChild;
    console.log("dev-nav-container router child: ", child);
    
    
    console.log("dev-nav-container activatedRoute snapshot: ", activatedRoute.snapshot);
    
    activatedRoute.url.subscribe((url) => {
      console.log("dev-nav-container activatedRoute url", url);
    });
    
    activatedRoute.url.subscribe((urlSegment: UrlSegment[]) => {
      console.log("dev-nav-container activatedRoute urlSegment: ", urlSegment);
    });
    
    // In opposite to other observables, that are scoped to a particular route, query parameters and fragment are shared across multiple routes
    activatedRoute.fragment.subscribe((fragment) => {
      console.log("dev-nav-container activatedRoute fragment: ", fragment);
    });
    
    activatedRoute.data.subscribe((d) => {
      console.log("dev-nav-container activatedRoute data: ", d);
    });
    
    console.log("dev-nav-container activatedRoute outlet: ", activatedRoute.outlet);
    
    console.log("dev-nav-container activatedRoute component: ", activatedRoute.component);
    
    console.log("dev-nav-container activatedRoute routeConfig: ", activatedRoute.routeConfig);
    
    console.log("dev-nav-container activatedRoute root: ", activatedRoute.root);
    
    console.log("dev-nav-container activatedRoute parent: ", activatedRoute.parent);
    
    console.log("dev-nav-container activatedRoute firstChild: ", activatedRoute.firstChild);
    
    console.log("dev-nav-container activatedRoute children: ", activatedRoute.children);
    
    console.log("dev-nav-container activatedRoute pathFromRoot: ", activatedRoute.pathFromRoot);
    
    activatedRoute.paramMap.subscribe((paramMap) => {
      console.log("dev-nav-container activatedRoute paramMap: ", paramMap);
    });
    
    // In opposite to other observables, that are scoped to a particular route, query parameters and fragment are shared across multiple routes
    activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      console.log("dev-nav-container activatedRoute queryParamMap: ", queryParamMap);
    });
    
    console.log("dev-nav-container router url: ", router.url);
    
    
    
  }

  ngOnInit() {
    
  }
  
  
  /** Tests are against the following route config in the dev-nav-routing.module */
  // const devNavRoutes: Routes = [
  //   {
  //     path: '',
  //     component: DevNavContainerComponent, canActivate: [ DevNavAuthGuard1Service ],
  //     children: [
  //       { path: '', canActivateChild: [ DevNavAuthGuard1Service ],
  //         children: [
  //           { path: '', redirectTo: 'dashboard' },
  //           { path: 'accounts', component: DevNavManageAccountsComponent },
  //           { path: 'users', component: DevNavManageUsersComponent },
  //           { path: 'dashboard', component: DevNavDashboardComponent,
  //             children: [
  //               { path: ':auxiliaryId', component: DevNavAuxiliaryComponent, outlet: 'auxiliary'},
  //               { path: ':ancillaryId', component: DevNavAncillaryComponent, outlet: 'ancillary' }
  //             ] },
  //           { path: ':id', component: DevNavDashboardComponent,
  //             children: [
  //               { path: ':auxiliaryId', component: DevNavAuxiliaryComponent, outlet: 'auxiliary'},
  //               { path: ':ancillaryId', component: DevNavAncillaryComponent, outlet: 'ancillary' }
  //             ] },
  //         ] },
  //     ] } 
  // ];
  
  /** start test 1 */
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  
  // // failure, console error
  // navigateAuxiliaryOutlet(auxiliaryId) {
  //   this.router.navigate([{ outlets: { 'auxiliary': [auxiliaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // // failure, console error
  // navigateAncillaryOutlet(ancillaryId) {
  //   this.router.navigate([{ outlets: { 'ancillary': [ancillaryId] }}], { relativeTo: this.activatedRoute });
  // }
  /** end test 1 */
  
  /** start test 2 */
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  
  // // semi-works
  // navigateAuxiliaryOutlet(auxiliaryId) {
  //   this.router.navigate(['/dev-nav/dashboard',{ outlets: { 'auxiliary': [auxiliaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // // semi-works
  // navigateAncillaryOutlet(ancillaryId) {
  //   this.router.navigate(['/dev-nav/dashboard',{ outlets: { 'ancillary': [ancillaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // // failure, no console error
  // closeAuxiliaryOutlet() {
  //   this.router.navigate([{ outlets: { 'auxiliary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  // // failure, no console error
  // closeAncillaryOutlet() {
  //   this.router.navigate([{ outlets: { 'ancillary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  
  // step 1: click button invoke navigateAuxiliaryOutlet(auxiliaryId)
  // result: success, opens auxiliary outlet
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard/(auxiliary:1)
  
  // step 2: click button invoke closeAuxiliaryOutlet()
  // result: failure, mutates url and does not close auxiliary outlet
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard/(auxiliary:1)
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/(dashboard/(auxiliary:1))
  
  // step 3: click button invoke closeAuxiliaryOutlet()
  // result: failure, mutates url and closes the auxiliary outlet
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/(dashboard/(auxiliary:1))
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/(dashboard)
  
  /** end test 2 */
  
  
  /** start test 3 */
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  
  // // works
  // navigateAuxiliaryOutlet(auxiliaryId) {
  //   this.router.navigate(['/dev-nav/dashboard', { outlets: { 'auxiliary': [auxiliaryId] }}]);
  // }
  
  // // works
  // navigateAncillaryOutlet(ancillaryId) {
  //   this.router.navigate(['/dev-nav/dashboard', { outlets: { 'ancillary': [ancillaryId] }}]);
  // }
  
  // // works
  // closeAuxiliaryOutlet() {
  //   this.router.navigate(['/dev-nav/dashboard', { outlets: { 'auxiliary': null }}]);
  // }
  
  // // works
  // closeAncillaryOutlet() {
  //   this.router.navigate(['/dev-nav/dashboard', { outlets: { 'ancillary': null }}]);
  // }
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  
  // step 1: click button invoke navigateAuxiliaryOutlet(auxiliaryId)
  // result: success, opens auxiliary outlet
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard/(auxiliary:1)
  
  // step 2: click button invoke closeAuxiliaryOutlet()
  // result: success, closes auxiliary outlet
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard/(auxiliary:1)
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  
  
  /** end test 3 */
  
  
  
  /** start test 4 */
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  
  // // works
  // navigateAuxiliaryOutlet(auxiliaryId) {
  //   this.router.navigate(['/dev-nav/dashboard', { outlets: { 'auxiliary': [auxiliaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // // works
  // navigateAncillaryOutlet(ancillaryId) {
  //   this.router.navigate(['/dev-nav/dashboard', { outlets: { 'ancillary': [ancillaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // // works
  // closeAuxiliaryOutlet() {
  //   this.router.navigate(['/dev-nav/dashboard', { outlets: { 'auxiliary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  // // works
  // closeAncillaryOutlet() {
  //   this.router.navigate(['/dev-nav/dashboard', { outlets: { 'ancillary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  
  // step 1: click button invoke navigateAuxiliaryOutlet(auxiliaryId)
  // result: success, opens auxiliary outlet without undesirable url mutations
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard/(auxiliary:1)
  
  // step 2: click button invoke closeAuxiliaryOutlet()
  // result: success, closes auxiliary outlet without undesirable url mutations
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard/(auxiliary:1)
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  
  // Not as technically correct as test 3 because the first segment begins with '/' the specifies the absolute path from root,
  // and makes use of relativeTo activated route, either use absolute or relative not both, to be consistent
  
  /** end test 4 */
  
  /** start test 5 */
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  
  // // works
  // navigateAuxiliaryOutlet(auxiliaryId) {
  //   this.router.navigate(['/dev-nav/10', { outlets: { 'auxiliary': [auxiliaryId] }}]);
  // }
  
  // // works
  // navigateAncillaryOutlet(ancillaryId) {
  //   this.router.navigate(['/dev-nav/10', { outlets: { 'ancillary': [ancillaryId] }}]);
  // }
  
  // // works
  // closeAuxiliaryOutlet() {
  //   this.router.navigate(['/dev-nav/10', { outlets: { 'auxiliary': null }}]);
  // }
  
  // // works
  // closeAncillaryOutlet() {
  //   this.router.navigate(['/dev-nav/10', { outlets: { 'ancillary': null }}]);
  // }
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  
  // step 1: click button invoke navigateAuxiliaryOutlet(auxiliaryId)
  // result: success, opens auxiliary outlet
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10/(auxiliary:1)
  
  // step 2: click button invoke closeAuxiliaryOutlet()
  // result: success, closes auxiliary outlet
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10/(auxiliary:1)
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  
  /** end test 5 */
  
  /** start test 6 */
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  
  // // works
  // navigateAuxiliaryOutlet(auxiliaryId) {
  //   this.router.navigate(['/dev-nav/10', { outlets: { 'auxiliary': [auxiliaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // // works
  // navigateAncillaryOutlet(ancillaryId) {
  //   this.router.navigate(['/dev-nav/10', { outlets: { 'ancillary': [ancillaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // // works
  // closeAuxiliaryOutlet() {
  //   this.router.navigate(['/dev-nav/10', { outlets: { 'auxiliary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  // // works
  // closeAncillaryOutlet() {
  //   this.router.navigate(['/dev-nav/10', { outlets: { 'ancillary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  // step 1: click button invoke navigateAncillaryOutlet(ancillaryId)
  // result:
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10/(auxiliary:1)
  
  // step 2: click button invoke closeAuxiliaryOutlet()
  // result:
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10/(auxiliary:1)
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  // step 1: click button invoke navigateAncillaryOutlet(ancillaryId)
  // result:
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10/(auxiliary:1)
  
  // step 2: click button invoke closeAuxiliaryOutlet()
  // result:
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10/(auxiliary:1)
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  
  
  /** end test 6 */
  
  /** start test 7 */
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  
  // works
  // navigateAuxiliaryOutlet(auxiliaryId) {
  //   this.router.navigate(['/dev-nav/10', { outlets: { 'auxiliary': [auxiliaryId] }}]);
  // }
  
  // // works
  // navigateAncillaryOutlet(ancillaryId) {
  //   this.router.navigate(['/dev-nav/10', { outlets: { 'ancillary': [ancillaryId] }}]);
  // }
  
  // // failure, no console error
  // closeAuxiliaryOutlet() {
  //   this.router.navigate([{ outlets: { 'auxiliary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  // // failure, no console error
  // closeAncillaryOutlet() {
  //   this.router.navigate([{ outlets: { 'ancillary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  
  // step 1: click button invoke navigateAuxiliaryOutlet(auxiliaryId)
  // result: success, opens auxiliary outlet
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10/(auxiliary:1)
  
  // step 2: click button invoke closeAuxiliaryOutlet()
  // result: failure, mutates url and does not close auxiliary outlet
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10/(auxiliary:1)
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/(10/(auxiliary:1))
  
  // step 3: click button invoke closeAuxiliaryOutlet()
  // result: failure, mutates url and closes auxiliary outlet; furthermore, routerLink="['/dev-nav/dashboard']" doesn't work from the 'after url': https://dev-workspace-cloudinertia.c9users.io/dev-nav/(10)
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/(10/(auxiliary:1))
  // after url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/(10)
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  // result: failure, mutates url and closes auxiliary outlet; furthermore, routerLink="['/dev-nav/dashboard']" doesn't work from the 'after url': https://dev-workspace-cloudinertia.c9users.io/dev-nav/(10)

  
  /** end test 7 */
  
  /** start test 8 */
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/dashboard
  
  // works
  navigateAuxiliaryOutlet(auxiliaryId) {
    this.router.navigate(['../dev-nav/10', { outlets: { 'auxiliary': [auxiliaryId] }}], { relativeTo: this.activatedRoute });
  }
  
  // works
  // navigateAncillaryOutlet(ancillaryId) {
  //   this.router.navigate([{ outlets: { 'ancillary': [ancillaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // test 8-1
  navigateAncillaryOutlet(ancillaryId) {
    this.router.navigate(['../dev-nav/10', { outlets: { 'ancillary': [ancillaryId] }}], { relativeTo: this.activatedRoute });
  }
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10 
  // returns to url: https://dev-workspace-cloudinertia.c9users.io/home
  // closeAuxiliaryOutlet() {
  //   this.router.navigate(['../', { outlets: { 'auxiliary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10 
  // returns to url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  closeAuxiliaryOutlet() {
    this.router.navigate(['./10', { outlets: { 'auxiliary': null }}], { relativeTo: this.activatedRoute });
  }
  
  // failure, no console error
  // closeAncillaryOutlet() {
  //   this.router.navigate([{ outlets: { 'ancillary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  // test 8-1
  closeAncillaryOutlet() {
    this.router.navigate(['./10', { outlets: { 'ancillary': null }}], { relativeTo: this.activatedRoute });
  }
  
  // init url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  // step 1: click button invoke navigateAuxiliaryOutlet(auxiliaryId)
  // result: 
  // before url: https://dev-workspace-cloudinertia.c9users.io/dev-nav/10
  // after url: 
  
  /** end test 8 */
  
  /** start test 9 */
  
  // // works
  // navigateAuxiliaryOutlet(auxiliaryId) {
  //   this.router.navigate(['../dev-nav/10', { outlets: { 'auxiliary': [auxiliaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // // works
  // navigateAncillaryOutlet(ancillaryId) {
  //   this.router.navigate([{ outlets: { 'ancillary': [ancillaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // // failure, no console error
  // closeAuxiliaryOutlet() {
  //   this.router.navigate([{ outlets: { 'auxiliary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  // // failure, no console error
  // closeAncillaryOutlet() {
  //   this.router.navigate([{ outlets: { 'ancillary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  /** end test 9 */
  
  
  
  /** start test 10 */
  
  // // works
  // navigateAuxiliaryOutlet(auxiliaryId) {
  //   this.router.navigate(['./10', { outlets: { 'auxiliary': [auxiliaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // // works
  // navigateAncillaryOutlet(ancillaryId) {
  //   this.router.navigate([{ outlets: { 'ancillary': [ancillaryId] }}], { relativeTo: this.activatedRoute });
  // }
  
  // // failure, no console error
  // closeAuxiliaryOutlet() {
  //   this.router.navigate([{ outlets: { 'auxiliary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  // // failure, no console error
  // closeAncillaryOutlet() {
  //   this.router.navigate([{ outlets: { 'ancillary': null }}], { relativeTo: this.activatedRoute });
  // }
  
  
  
  /** end test 10 */
}
