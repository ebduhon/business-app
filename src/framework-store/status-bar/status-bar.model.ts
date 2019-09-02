
export interface IStatusBar {
  activated?: boolean;
  visible?: boolean;
}

export class StatusBar implements IStatusBar {
  constructor(public activated?: boolean, public visible?: boolean) {}
}