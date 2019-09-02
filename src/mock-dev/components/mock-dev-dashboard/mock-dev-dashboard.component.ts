import { Component, OnInit } from '@angular/core';

// this component doesnt need a selector since it is imperatively navigated to
@Component({
  templateUrl: './mock-dev-dashboard.component.html',
  styleUrls: ['./mock-dev-dashboard.component.scss']
})
export class MockDevDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
