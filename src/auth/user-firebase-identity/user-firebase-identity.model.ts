
 
export interface IUserFirebaseIdentity {
  uid: string;
  displayName?: string;
  photoURL?: string;
  email?: string;
  emailVerified?: boolean;
  phoneNumber?: string;
  refreshToken?: string;
  isAnonymous?: boolean;
}

export class UserFirebaseIdentity implements IUserFirebaseIdentity {
  constructor(public uid: string, public displayName?: string, public photoURL?: string, public email?: string, public emailVerified?: boolean, public phoneNumber?: string, public refreshToken?: string, public isAnonymous?: boolean) {}
}