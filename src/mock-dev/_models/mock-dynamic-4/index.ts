// import { ValidatorFn, FormGroup } from '@angular/forms';

// interface ViewModel {
//   uid: string;
//   vmType?: any;
//   requestedAt?: Date | string;
//   receivedAt?: Date | string;
//   startAt?: Date | string;
//   endAt?: Date | string;
// }

// interface ViewModelRoutesConfiguration {
//   uid: string;
// }

// interface ViewModelPermissionsRequirements {
//   uid: string;
// }

// interface ViewModelSecurityRequirements {
//   uid: string;
// }

// interface ViewModelBusinessRules {
//   uid: string;
// }

// interface ViewModelConstraints {
//   uid: string;
// }

// interface ViewModelContraintRule {
//   uid: string;
// }

// interface ViewModelSessions {
//   uid: string;
//   ownerUid?: string;
// }

// interface ViewModelInstance {
//   uid: string;
//   ownerUid?: string;
//   store: any;
//   state: any;
// }

// interface LayoutConfig {
//   uid: string;
  
//   componentTypes: Observable<any[]>;
//   selectedComponentType: any;
//   selectedComponentTypeParent: any;
  
//   eventTypes: Observable<any[]>;
//   selectedEventType: any;
  
//   validatorTypes: Observable<any[]>;
//   selectedValidatorType: any;
// }

// interface ComponentTypeConfig {
//   uid: string;
//   config?: any;
//   group?: any;
// }

// interface DynamicFormDefinition {
//   uid: string;
// }

// interface DynamicFieldDefintion {
//   uid?: string;
//   operation?: string;
//   config: FieldConfig;
//   group: FormGroup;
// }

// interface FieldConfig {
//   disabled?: boolean,
//   label?: string,
//   name: string,
//   options?: string[],
//   placeholder?: string,
//   type: string,
//   validation?: ValidatorFn[],
//   value?: any
// }

// //TODO: interface and dynamic configuration of reinstantiated view model from previous session

// // key represents the property name i.e., isOpened, loading, error, etc.
// // type is the data type of the key property name
// // target 