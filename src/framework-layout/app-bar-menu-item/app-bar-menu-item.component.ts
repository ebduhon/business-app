import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

export interface IAppBarMenuItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: IAppBarMenuItem[];
}

@Component({
  selector: 'app-bar-menu-item',
  templateUrl: './app-bar-menu-item.component.html',
  styleUrls: ['./app-bar-menu-item.component.scss']
})
export class AppBarMenuItemComponent implements OnInit {
  @ViewChild('childMenu') public childMenu;
  
  @Input()
  items: IAppBarMenuItem[];
  
  constructor(public router: Router) { }

  ngOnInit() {
  }

}
