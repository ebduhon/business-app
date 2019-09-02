import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'tabnav-tab',
  templateUrl: './tabnav-tab.component.html',
  styleUrls: ['./tabnav-tab.component.scss']
})
export class TabnavTabComponent implements OnInit {
  
  @Input()
  tab: any;
  
  isActiveRoute = false;
  
  constructor(private router: Router) { }

  checkActiveRoute(route: string) {
    if(route.startsWith(this.tab.route)) {
      this.isActiveRoute = true;
    } else {
      this.isActiveRoute = false;
    }
  }
  
  ngOnInit() {
    this.checkActiveRoute(this.router.url);
    
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.checkActiveRoute(event.url);
        }
      });
  }
  
  activateTab($event) {
    console.log($event);
  }

}
