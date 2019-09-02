
//TODO: related to framework user-interface configuration options
export interface IUiWindow {
  height?: number;
  width?: number;
}

export class UiWindow implements IUiWindow {
  constructor(public height?: number, public width?: number) {}
}