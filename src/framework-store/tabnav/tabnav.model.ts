
export interface ITabnav {
  activated?: boolean;
  visible?: boolean;
  tabs?: any;
}

export class Tabnav implements ITabnav {
  constructor(public activated?: boolean, public visible?: boolean, public tabs?: any) {}
}