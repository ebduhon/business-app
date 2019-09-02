import { MockTabNavItem } from './mock-tab-nav-item';

export interface MockTabNavList {
  id: number | string,
  viewModel?: any,
  viewModelDefinition?: any,
  subViewModel?: any,
  tabNavList: Array<MockTabNavItem>,
  parent?: any,
  operation?: any,
  errorMessage?: any
}