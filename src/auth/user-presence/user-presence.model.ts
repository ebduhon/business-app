
export interface IUserPresence {
  activated?: boolean;
  visible?: boolean;
  uid?: string;
  presenceType?: string;
  currentConnectionId?: string;
  connectionsCount?: number;
}

export class UserPresence implements IUserPresence {
  constructor(public activated?: boolean, public visible?: boolean, public uid?: string, public presenceType?: string, public currentConnectionId?: string, public connectionsCount?: number) {}
}