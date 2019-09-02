
export interface ILoadingSpinner {
  activated?: boolean;
  visible?: boolean;
}

export class LoadingSpinner implements ILoadingSpinner {
  constructor(public activated?: boolean, public visible?: boolean) {}
}