import { ValidatorFn } from '@angular/forms';

export interface MockFieldDefinition {
  key: string,
  type: string,
  isId: boolean,
  label?: string,
  name?: string,
  options?: string[],
  placeholder?: string,
  validation?: ValidatorFn[],
  value?: any
}

export interface MockFieldValidatorsDefinition {
  validation?: ValidatorFn[],
  min: number,
  max: number,
  required: boolean,
  email: string,
  minLength: number,
  maxLength: number,
  pattern: string
  
}

export interface MockValidationErrors {
  [key: string]: any
}