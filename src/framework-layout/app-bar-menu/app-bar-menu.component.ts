import { Component, ViewEncapsulation, OnInit } from '@angular/core';

export interface IAppBarMenuItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: IAppBarMenuItem[];
}

@Component({
  selector: 'app-bar-menu',
  templateUrl: './app-bar-menu.component.html',
  styleUrls: ['./app-bar-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppBarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  appBarMenuItems: IAppBarMenuItem[] = [
    {
      displayName: 'Home',
      iconName: 'close',
      route: 'home'
    },
    {
      displayName: 'Documents',
      iconName: 'close',
      children: [
        {
          displayName: 'My documents',
          iconName: 'folder',
          route: 'documents-my-documents'
        },
        {
          displayName: 'Shared documents',
          iconName: 'folder_shared',
          route: 'documents-shared-documents'
        }
      ]
    },
    {
      displayName: 'Billing',
      iconName: 'close',
      children: [
        {
          displayName: 'Billing summary',
          iconName: 'account_balance',
          route: 'billing-summary'
        },
        {
          displayName: 'Make a payment',
          iconName: 'payment',
          route: 'billing-payment'
        },
        {
          displayName: 'Transactions history',
          iconName: 'date_range',
          route: 'payments-transactions-history'
        }
      ]
    },
    {
      displayName: 'My Account',
      iconName: 'close',
      children: [
        {
          displayName: 'Account overview',
          iconName: 'account_box',
          route: 'account-overview'
        },
        {
          displayName: 'Account settings',
          iconName: 'settings',
          children: [
            {
              displayName: 'General',
              iconName: 'settings_applications',
              route: 'account-settings-general'
            },
            {
              displayName: 'Security and sign-in',
              iconName: 'lock',
              route: 'account-settings-security'
            },
            {
              displayName: 'Communications',
              iconName: 'language',
              route: 'account-settings-communications'
            }
          ]
        },
        {
          displayName: 'Sign Out',
          iconName: 'exit_to_app',
          route: 'sign-out'
        }
      ]
    }
  ];
}
