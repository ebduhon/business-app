import { OrganizationState } from '../organization.state';

import * as OnboardingActions from './onboarding.actions';
import { IOnboarding, Onboarding } from './onboarding.model';
export type Action = OnboardingActions.All;

const defaultOnboardingState = new Onboarding(true, false);

export interface OnboardingState extends IOnboarding {
  activated?: boolean;
  visible?: boolean;
}

export function onboardingReducer(state: OnboardingState = defaultOnboardingState, action: Action): OnboardingState {
  switch (action.type) {
    case OnboardingActions.CONFIGURE_ONBOARDING:
      return { ...state, ...action.payload };
    
    case OnboardingActions.SHOW_ONBOARDING:
      return { ...state, ...action.payload };
    
    case OnboardingActions.HIDE_ONBOARDING:
      return { ...state, ...action.payload };
    
    case OnboardingActions.LOAD_ONBOARDING_REQUEST:
      return { ...state, ...action.payload };
    
    case OnboardingActions.LOAD_ONBOARDING_SUCCESS:
      return { ...state, ...action.payload };
    
    case OnboardingActions.LOAD_ONBOARDING_FAILURE:
      return { ...state, ...action.payload };
    
    case OnboardingActions.LOAD_ONBOARDING_COMPLETE:
      return { ...state, ...action.payload };
      
    default:
      return state;
  }
}