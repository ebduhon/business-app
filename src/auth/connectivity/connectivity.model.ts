
export interface IConnectivity {
  activated?: boolean;
  visible?: boolean;
  connected?: boolean;
  loading?: boolean;
}

export class Connectivity implements IConnectivity {
  constructor(public activated?: boolean, public visible?: boolean, public connected?: boolean, public loading?: boolean) {}
}