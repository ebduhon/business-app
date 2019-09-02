
export interface IStatus {
  isAuthenticated?: boolean;
}

export class Status implements IStatus {
  constructor(public isAuthenticated?: boolean) {}
}