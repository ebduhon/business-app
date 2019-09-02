import { FormGroup } from '@angular/forms';
import { MockFieldConfig } from './mock-field-config';

export interface MockField {
  config: MockFieldConfig,
  group: FormGroup
}