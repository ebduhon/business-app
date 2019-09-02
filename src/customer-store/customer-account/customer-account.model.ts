

export interface ICustomerAccount {
  activated?: boolean;
  visible?: boolean;
}

export class CustomerAccount implements ICustomerAccount {
  constructor(public activated?: boolean, public visible?: boolean) {}
}