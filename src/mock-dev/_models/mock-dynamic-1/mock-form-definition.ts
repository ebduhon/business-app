import { MockFieldDefinition } from './mock-field-definition';

export interface MockViewModelDefinition {
  viewModel: any,
  viewModelDefinition: Array<MockFieldDefinition>,
  operation: string,
  errorMessage: string,
  update: any,
  create: any,
}