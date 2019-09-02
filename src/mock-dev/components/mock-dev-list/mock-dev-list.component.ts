import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { MockDevDataItem, MockDevDataService } from '../../services/mock-dev-data.service';

@Component({
  selector: 'mock-dev-list',
  templateUrl: './mock-dev-list.component.html',
  styleUrls: ['./mock-dev-list.component.scss']
})
export class MockDevListComponent implements OnInit {
  mockDevDataList$: Observable<MockDevDataItem[]>;
  selectedId: number;

  constructor(private mockDevDataService: MockDevDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.mockDevDataList$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.mockDevDataService.getMockDevDataList();
      });
  }
}
