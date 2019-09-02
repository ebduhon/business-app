
import { Connectivity } from './connectivity';
import { Persistence } from './persistence';
import { SignIn } from './sign-in';
import { SignOut } from './sign-out';
import { SignUp } from './sign-up';
import { Status } from './status';
import { UserFirebaseIdentity } from './user-firebase-identity';
import { UserPresence } from './user-presence';

export interface AuthState {
  connectivity: Connectivity;
  persistence: Persistence;
  userPresence: UserPresence;
  signIn: SignIn;
  signOut: SignOut;
  signUp: SignUp;
  status: Status;
  userFirebaseIdentity: UserFirebaseIdentity;
}