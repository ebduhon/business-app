import { Component, ViewEncapsulation, OnInit } from '@angular/core';

//development
export interface IProfileMenuItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: IProfileMenuItem[];
}

@Component({
  selector: 'profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
