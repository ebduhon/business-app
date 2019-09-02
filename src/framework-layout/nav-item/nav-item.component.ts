import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input()
  icon = '';
  
  @Input()
  hint = '';
  
  @Input()
  routerLink: string | any[] = '/';
  
  @Output()
  activate = new EventEmitter();
  
  // development
  isActiveRoute: boolean = false;
  
  constructor(private router: Router) {}
  
  // checkActiveRoute(route: string) {
    
  //   if(route.startsWith('/' + this.item.route)) {
  //     this.isActiveRoute = true;
  //   } else {
  //     this.isActiveRoute = false;
  //   }
    
  // }
  
  ngOnInit() : void {
    // this.checkActiveRoute(this.router.url);

    // this.router.events
    //   .subscribe((event) => {
    //     if (event instanceof NavigationEnd) {
    //       this.checkActiveRoute(event.url);
    //     }
    //   });
  }
  
}
