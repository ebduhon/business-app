
export interface IDynamicDialog {
  activated?: boolean;
  visible?: boolean;
}

export class DynamicDialog implements IDynamicDialog {
  constructor(public activated?: boolean, public visible?: boolean) {}
}