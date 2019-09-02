
export interface ISecondaryToolbar {
  activated?: boolean;
  visible?: boolean;
}

export class SecondaryToolbar implements ISecondaryToolbar {
  constructor(public activated?: boolean, public visible?: boolean) {}
}