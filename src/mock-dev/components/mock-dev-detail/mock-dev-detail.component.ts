import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { fadeAnimation } from '../../animations/fade.animation';
import { MockDevDataItem } from '../../services/mock-dev-data.service';

@Component({
  selector: 'mock-dev-detail',
  templateUrl: './mock-dev-detail.component.html',
  styleUrls: ['./mock-dev-detail.component.scss'],
  animations: [ fadeAnimation ]
})
export class MockDevDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  // TODO: display and position using flexbox?
  // @HostBinding('style.display') display = 'flex';
  // @HostBinding('style.position') position = '';
  
  // @HostBinding('style.display') display = 'block';
  // @HostBinding('style.position') position = 'absolute';
  
  mockDevDataItem: MockDevDataItem;
  editName: string;
  
  //TODO: inject modal.service confirm-dialog
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { mockDevDataItem: MockDevDataItem }) => {
        this.editName = data.mockDevDataItem.name;
        this.mockDevDataItem = data.mockDevDataItem;
      });
  }
  
  cancel() {
    this.goToMockDevList();
  }
  
  save() {
    this.mockDevDataItem.name = this.editName;
    this.goToMockDevList();
  }
  
  //TODO: canDeactivate()
  
  goToMockDevList() {
    let mockDevDataItemId = this.mockDevDataItem ? this.mockDevDataItem.id : null;
    // Pass along the mockDevDataItem id if available
    // so that the MockDevListComponent can select that item.
    // Add an additional useless `foo` parameter as an example
    // Relative navigation back to the list
    this.router.navigate(['../', { id: mockDevDataItemId, foo: 'foo' }], { relativeTo: this.route });
  }

}
