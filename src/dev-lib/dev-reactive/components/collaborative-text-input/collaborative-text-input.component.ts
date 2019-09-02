
import { Component, ElementRef, forwardRef, HostBinding, HostListener, Injector, Input, Optional, Renderer2, Self, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormControlName, FormGroup, FormGroupDirective, NgControl, NgForm, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs/Subject';
import { AngularFireDatabase } from 'angularfire2/database';

/** Data structure for holding collaborative text */
export class CollaborativeTextInput {
  constructor(public collaborativeText: string) {}
}

export const COLLABORATIVE_TEXT_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CollaborativeTextInputComponent),
  multi: true,
};

@Component({
  selector: 'collaborative-text-input',
  templateUrl: './collaborative-text-input.component.html',
  styleUrls: ['./collaborative-text-input.component.scss'],
  providers: [ 
    COLLABORATIVE_TEXT_INPUT_VALUE_ACCESSOR,
    { provide: MatFormFieldControl, useExisting: CollaborativeTextInputComponent }
  ],
  host: {
    '[class.floating]': 'shouldPlaceholderFloat',
    '[id]': 'id',
    '[attr.aria-describedBy]': 'describedBy',
  }
})
export class CollaborativeTextInputComponent implements ControlValueAccessor, MatFormFieldControl<CollaborativeTextInput>, OnInit, OnDestroy {
  static nextId = 0;
  
  // @HostListener('blur', [false]) _focusChanged(false);
  
  // @HostListener('focus', [true]) _focusChanged(true);
  
  // @HostListener('input', ['$event']) _onInput(e);
  
  //TODO: _focusChanged()
  //TODO: _onInput()
  //TODO: _onBlur()
  
  //TODO: _onTouchedCallback()
  //TODO: _onChangeCallback()
  
  rootCollaborativeForm: FormGroup;
  
  // development
  onChange = (collaborativeField: CollaborativeTextInput | null) => {
  };
  onTouched = () => {
  };
  
  /**
   * Because the '<mat-form-field>' uses the 'OnPush' change detection strategy,
   * we need to let it know when something happens in the form field control 
   * that may require the form field to run change detection.
   * We do this via the 'stateChanges' property.
   * Make sure to complete 'stateChanges' when the component is destroyed.
   */
  stateChanges = new Subject<void>();
  
  /** 
   * This property indicates whether or not the form field control should be 
   * considered to be in a focused state.
   * When it is in a focused state, the form field is displayed with a solid color underline.
   * For the purposes of our component, 
   * we want to consider it focused if any of the inputs are focused within the formGroup.
   * We can use the 'FocusMonitor' from '@angular/cdk' to easily check this.
   * We also need to remember to emit on the 'stateChanges' stream so change detection can happen.
   */
  focused = false;
  
  /**
   * This property allows the form field control to specify the 
   * '@angular/forms' control that is bound to this component.
   * Since this component implements 'ControlValueAccessor' 
   * so that the component can work with 'formControl' and 'ngModel'
   * you inject the 'NgControl' and make it publicly available:
   * 'constructor(..., @Optional() @Self() public ngControl: NgControl) { ... }'.
   * Otherwise if 'ControlValueAccessor' is not setup for this component simply set 
   * 'ngControl = null;'
   */
  
  /**
   * This property indicates whether the associated 'NgControl' is in an error state.
   * If this component doesn't implement 'ControlValueAccessor' as it relates to 'NgControl',
   * then set 'errorState = false;'.
   */
  errorState = false; //TODO: check the controls' values to determine the value of 'errorState' as it relates to 'ControlValueAccessor' methods.
  
  /**
   * This property allows us to specify a unique string for the type of control in form field.
   * The '<mat-form-field>' will add an additional class based on this type that can be used to easily 
   * apply special styles to a '<mat-form-field>' that contains a specific type of control.
   */
  controlType = 'collaborative-text-input';
  
  /** Implemented as part of MatFormFieldControl 
   * This property indicates whether the form field control is empty. 
   */
  get empty() {
    let n = this.rootCollaborativeForm.value;
    return !n.collaborativeText;
  }
  
  /** Implemented as part of MatFormFieldControl 
   * This property is used to indicate whether the placeholder should be in the floating position.
   * We'll use the same logic as 'matInput' and 
   * float the placeholder when the input is focused or non-empty.
   */
  get shouldPlaceholderFloat() { return this.focused || !this.empty; }
  
  /**
   * This property should return the ID of an element in the component's template that we want
   * the '<mat-form-field>' to associate all of its labels and hints with.
   * In this case, we'll use the host element and just generate a unique ID for it.
   */
  // @HostBinding() id = `collaborative-text-input-${CollaborativeTextInputComponent.nextId++}`;
  // The 'id' Host Property Binding is setup in the @Component() directive metadata
  id = `collaborative-text-input-${CollaborativeTextInputComponent.nextId++}`;
  
  /**
   * 'setAriaDescribedByIds(ids: string[])', 
   * this method is used by the '<mat-form-field>' to specify the IDs that should be used for
   * the 'aria-describedby' attribute of your component.
   * This method has one parameter, the list of IDs, 
   * we just need to apply the given IDs to our host element.
   */
  // @HostBinding('attr.aria-describedby') describedBy = '';
  // The 'describedBy' Host Property Binding is setup in the @Component() directive metadata, see the setDescribedByIds() method below.
  describedBy = '';
  
  /**
   * This property allows us to tell the '<mat-form-field>' what to use as a placeholder.
   * In this example, we'll do the same thing as 'matInput' and '<mat-select>' and allow the user
   * to specify it via an '@Input()'.
   * Since the value of the placeholder may change over time, 
   * we need to make sure to trigger change detection in the parent form field 
   * by emitting on the 'stateChanges' stream when the placeholder changes.
   */
  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  private _placeholder: string;
  
  /**
   * This property is used to indicate whether the input is required.
   * '<mat-form-field>' uses this information to add a required indicator to the placeholder.
   * Again, we'll want to make sure we run change detection if the required state changes.
   */
  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  private _required = false;
  
  /**
   * This property tells the form field when it should be in a disabled state.
   * In addition to reporting the right state to the form field,
   * we need to set the disabled state on the individual inputs that make up our component.
   */
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(dis) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }
  private _disabled = false;
  
  // The value of the control, get accessor
  @Input()
  get value(): CollaborativeTextInput | null {
    let n = this.rootCollaborativeForm.value;
    if (n.collaborativeText != null) {
      return new CollaborativeTextInput(n.collaborativeText);
    }
    return null;
  }
  
  //set accessor including call the onChange callback
  set value(collaborativeField: CollaborativeTextInput | null) {
    collaborativeField = collaborativeField || new CollaborativeTextInput('');
    this.rootCollaborativeForm.setValue({ collaborativeText: collaborativeField.collaborativeText });
    this.stateChanges.next();
  }
  
  
  // development
  @Input()
  config;

  constructor(
    fb: FormBuilder,
    @Optional() @Self() public ngControl: NgControl,
    @Optional() protected _parentForm: NgForm,
    @Optional() protected _parentFormGroup: FormGroupDirective,
    private afDb: AngularFireDatabase, 
    private fm: FocusMonitor, 
    private elRef: ElementRef, 
    private injector: Injector, 
    private renderer: Renderer2 
    
  ) {
    
    this.rootCollaborativeForm = fb.group({
      'collaborativeText': ''
    });
    
    // this.rootCollaborativeForm = new FormGroup({
    //   collaborativeText: new FormControl('')
    // });
    
    fm.monitor(elRef.nativeElement, renderer, true).subscribe((origin) => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
    
    // development
    this.rootCollaborativeForm.valueChanges.subscribe(data => this.onChange(this.value));
  }
  
  
  // development
  ngOnInit() {
    // this.ngControl = this.injector.get(NgControl);
  }
  
  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }
  
  /** Implemented as part of MatFormFieldControl */
  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }
  
  /** Implemented as part of MatFormFieldControl
   * 'onContainerClick(event: MouseEvent)',
   * this method will be called when the form field is clicked on.
   * It allows your component to hook in and handle that click however it wants.
   * This method has one parameter, the 'MouseEvent' for the click.
   * In our case we'll just focus the first '<input>' 
   * if the user isn't about to click an '<input>' anyways.
   */
  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }
  
  // development
  writeValue(collaborativeField: CollaborativeTextInput | null): void {
    //throw new Error("Method not implemented.");
    collaborativeField = collaborativeField || new CollaborativeTextInput('');
    this.rootCollaborativeForm.setValue({ collaborativeText: collaborativeField.collaborativeText });
    this.stateChanges.next();
    this.onChange(this.value);
  }
  
  registerOnChange(fn: any): void {
    //throw new Error("Method not implemented.");
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
    this.onTouched = fn;
  }
  
  setDisabledState(isDisabled: boolean): void {
    //throw new Error("Method not implemented.");
  }
  
}

/** Usage:
 * <mat-form-field>
 *   <collaborative-text-input></collaborative-text-input>
 * </mat-form-field>
 */

/**
 * We also get all of the features that come with '<mat-form-field>' such as
 * floating placeholder, prefix, suffix, hints, and 
 * errors (if we've given the form field an 'NgControl' and correctly report the error state).
 */
 
/** Usage: 
 * <mat-form-field>
 *   <collaborative-text-input placeholder="Collaborative placeholder" required></collaborative-text-input>
 *   <mat-icon matPrefix>people_outline</mat-icon>
 *   <mat-hint>Real-time multi-user collaboration capabilities</mat-hint>
 * </mat-form-field>
 */