
export interface IUiConfig {
  vm?: any;
  vmDefinitions?: any;
}

export class UiConfig implements IUiConfig {
  constructor(public vm?: any, public vmDefinitions?: any) {}
}