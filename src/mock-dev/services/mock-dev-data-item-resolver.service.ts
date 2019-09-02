import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { MockDevDataItem, MockDevDataService } from './mock-dev-data.service';

@Injectable()
export class MockDevDataItemResolverService implements Resolve<MockDevDataItem> {
  constructor(private mockDevDataService: MockDevDataService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MockDevDataItem> {
    let id = route.paramMap.get('id');
    
    return this.mockDevDataService.getMockDevDataItem(id).take(1).map(mockDevDataItem => {
      if (mockDevDataItem) {
        return mockDevDataItem;
      } else { // id not found
        this.router.navigate(['/mock-dev']);
        return null;
      }
    });
  }
}