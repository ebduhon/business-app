import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export class MockDevDataItem {
  constructor(public id: number, public name: string) {}
}

//Reference: https://angular.io/guide/dependency-injection

// class DevData {
//   constructor() {}
// }

// class MockDevData extends DevData {
//   constructor() {}
// }

const MOCKDEVDATALIST = [
  new MockDevDataItem(0, 'MockDevDataItem 0.'),
  new MockDevDataItem(1, 'MockDevDataItem 1.'),
  new MockDevDataItem(2, 'MockDevDataItem 2.'),
  new MockDevDataItem(3, 'MockDevDataItem 3.'),
];

@Injectable()
export class MockDevDataService {
  static nextMockDevDataItemId = 100;
  private mockDevDataList$: BehaviorSubject<MockDevDataItem[]> = new BehaviorSubject<MockDevDataItem[]>(MOCKDEVDATALIST);
  
  getMockDevDataList() { return this.mockDevDataList$; }
  
  getMockDevDataItem(id: number | string) {
    return this.getMockDevDataList()
      .map(mockDevDataList => mockDevDataList.find(mockDevDataItem => mockDevDataItem.id === +id));
  }
  
  addMockDevDataItem(name: string) {
    name = name.trim();
    if (name) {
      let mockDevDataItem = new MockDevDataItem(MockDevDataService.nextMockDevDataItemId++, name);
      MOCKDEVDATALIST.push(mockDevDataItem);
      this.mockDevDataList$.next(MOCKDEVDATALIST);
    }
  }
}