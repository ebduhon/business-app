
export interface IOnboarding {
  activated?: boolean;
  visible?: boolean;
}

export class Onboarding implements IOnboarding {
  constructor(public activated?: boolean, public visible?: boolean) {}
}