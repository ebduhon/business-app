import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DevMaterialModule } from '../../dev-material/dev-material.module';

import { DevReactiveContainerComponent } from './containers/dev-reactive-container/dev-reactive-container.component';
import { DevReactive1Component } from './components/dev-reactive-1/dev-reactive-1.component';
import { DevReactive2Component } from './components/dev-reactive-2/dev-reactive-2.component';
import { DevReactive3Component } from './components/dev-reactive-3/dev-reactive-3.component';
import { DevReactive4Component } from './components/dev-reactive-4/dev-reactive-4.component';

import { AddFieldHarnessComponent } from './components/add-field-harness/add-field-harness.component';
import { AddFieldNameComponent } from './components/add-field-name/add-field-name.component';
import { AddFieldSelectorComponent } from './components/add-field-selector/add-field-selector.component';
import { AddFieldButtonComponent } from './components/add-field-button/add-field-button.component';
import { RemoveFieldButtonComponent } from './components/remove-field-button/remove-field-button.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { CheckboxFieldComponent } from './components/checkbox-field/checkbox-field.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';

import { DevReactiveFormComponent } from './components/dev-reactive-form/dev-reactive-form.component';

import { DevUserForm1Component } from './components/dev-user-form-1/dev-user-form-1.component';

import { TextareaExpandedComponent } from './components/textarea-expanded/textarea-expanded.component';
import { CollaborativeTextInputComponent } from './components/collaborative-text-input/collaborative-text-input.component';
import { PasswordFieldComponent } from './components/password-field/password-field.component';

import { DevLifecycle1Component } from './dev-core/dev-lifecycle-1/dev-lifecycle-1.component';
import { DevContentChild1Component } from './dev-core/dev-content-child-1/dev-content-child-1.component';
import { DevContentChildren1Component } from './dev-core/dev-content-children-1/dev-content-children-1.component';
import { DevViewChild1Component } from './dev-core/dev-view-child-1/dev-view-child-1.component';
import { DevViewChildren1Component } from './dev-core/dev-view-children-1/dev-view-children-1.component';
import { DevQuery1Component } from './dev-core/dev-query-1/dev-query-1.component';
import { DevQueryList1Component } from './dev-core/dev-query-list-1/dev-query-list-1.component';
import { DevRenderer1Component } from './dev-core/dev-renderer-1/dev-renderer-1.component';
import { DevTemplateRef1Component } from './dev-core/dev-template-ref-1/dev-template-ref-1.component';
import { DevElementRef1Component } from './dev-core/dev-element-ref-1/dev-element-ref-1.component';
import { DevEmbeddedViewRef1Component } from './dev-core/dev-embedded-view-ref-1/dev-embedded-view-ref-1.component';
import { DevViewContainerRef1Component } from './dev-core/dev-view-container-ref-1/dev-view-container-ref-1.component';
import { DevViewRef1Component } from './dev-core/dev-view-ref-1/dev-view-ref-1.component';


import { DevReactive1Service } from './services/dev-reactive-1.service';
import { DevReactive2Service } from './services/dev-reactive-2.service';
import { DevReactive3Service } from './services/dev-reactive-3.service';
import { DevReactive4Service } from './services/dev-reactive-4.service';

import { DevReactiveQuery1Service } from './services/dev-reactive-query-1.service';
import { AddFieldSelectorService } from './services/add-field-selector.service';

import { UserEntry1Service } from './services/user-entry-1.service';
import { DevEmailConfirmation1Service } from './services/dev-email-confirmation-1.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DevMaterialModule
  ],
  declarations: [
    DevReactiveContainerComponent,
    DevReactive1Component,
    DevReactive2Component,
    DevReactive3Component,
    DevReactive4Component,
    
    AddFieldHarnessComponent,
    AddFieldNameComponent,
    AddFieldSelectorComponent,
    AddFieldButtonComponent,
    RemoveFieldButtonComponent,
    SaveButtonComponent,
    CheckboxFieldComponent,
    InputFieldComponent,
    SelectFieldComponent,
    
    DevReactiveFormComponent,
    
    DevUserForm1Component,
    
    TextareaExpandedComponent,
    CollaborativeTextInputComponent,
    PasswordFieldComponent,
    
    DevLifecycle1Component,
    DevContentChild1Component,
    DevContentChildren1Component,
    DevViewChild1Component,
    DevViewChildren1Component,
    DevQuery1Component,
    DevQueryList1Component,
    DevRenderer1Component,
    DevTemplateRef1Component,
    DevElementRef1Component,
    DevEmbeddedViewRef1Component,
    DevViewContainerRef1Component,
    DevViewRef1Component
  ],
  providers: [
    DevReactive1Service,
    DevReactive2Service,
    DevReactive3Service,
    DevReactive4Service,
    
    DevReactiveQuery1Service,
    AddFieldSelectorService,
    
    UserEntry1Service,
    DevEmailConfirmation1Service
  ],
  exports: [
    DevReactiveContainerComponent,
    TextareaExpandedComponent,
    CollaborativeTextInputComponent
  ]
})
export class DevReactiveModule {}