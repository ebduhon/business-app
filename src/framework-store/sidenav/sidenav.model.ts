
/** https://material.angular.io/components/sidenav/api */
/** https://github.com/angular/material2/tree/master/src/lib/sidenav */

export interface ISidenav {
  activated?: boolean;
  visible?: boolean;
  mode?: string;
  opened?: boolean;
  covered?: boolean;
  fixed?: boolean;
  fixedTopGap?: number;
  fixedBottomGap?: number;
}

export class Sidenav implements ISidenav {
  constructor(public activated?: boolean, public visible?: boolean, public mode?: string, public opened?: boolean, public covered?: boolean, public fixed?: boolean, public fixedTopGap?: number, public fixedBottomGap?: number) {}
}