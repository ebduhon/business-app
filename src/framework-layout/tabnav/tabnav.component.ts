import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

/**
 * TODO:
 * See the following Angular API reference ngForOf, create move, reorder capabilities for items in the list
 * https://angular.io/api/common/NgForOf
 * http://plnkr.co/edit/KVuXxDp0qinGDyo307QW?p=preview
 */

@Component({
  selector: 'tabnav',
  templateUrl: './tabnav.component.html',
  styleUrls: ['./tabnav.component.scss']
})
export class TabnavComponent implements OnInit {
  
  @Input()
  config: any;

  constructor(private router: Router) { }
  
  ngOnInit() {
    console.log('tabnav config: ');
    console.log(this.config);
  }
  
  
  trackById(index, tab) {
    return tab.id;
  }
}
