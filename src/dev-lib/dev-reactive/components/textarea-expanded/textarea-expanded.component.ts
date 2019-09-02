import { Component, Input, forwardRef, ViewChild, Renderer2, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators } from '@angular/forms';

export const EXPANDED_TEXTAREA_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextareaExpandedComponent),
  multi: true,
};

@Component({
  selector: 'textarea-expanded',
  templateUrl: './textarea-expanded.component.html',
  styleUrls: ['./textarea-expanded.component.scss'],
  providers: [ EXPANDED_TEXTAREA_VALUE_ACCESSOR ]
})
export class TextareaExpandedComponent implements ControlValueAccessor, OnChanges {
  @ViewChild('textarea') textarea;
  
  onChange;
  onTouched;
  
  @Input()
  config;
  
  label;
  
  constructor(private renderer: Renderer2) {
    this.label = 'default label';
  }

  // Writes a new value to the element.
  // This method will be called by the forms API to write to the view when programmatic (model -> view) changes are requested.
  // Angular will call this method with the "value" in one of the following cases:
  // 1. When you instantiate a new "FormControl"
  // 2. When you call "this.control.patchValue/setValue(value)"
  writeValue(value: any): void {
    //throw new Error("Method not implemented.");
    const div = this.textarea.nativeElement;
    this.renderer.setProperty(div, 'textContent', value);
  }
  
  // Registers a callback function that should be called when the control's value changes in the UI.
  // This is called by the forms API on initialization so it can update the form model when values propagate from the view (view -> model).
  // Set the function to be called when the control receives a "change" event.
  // Angular provides you with a "function" and asks you to call it whenever there is a change in your component with the new value so that it can update the control.
  // On blur (or equivalent), your class should call the registered function to allow the forms API to update itself
  registerOnChange(fn: any): void {
    //throw new Error("Method not implemented.");
    this.onChange = fn;
  }
  
  // registerOnTouched() is the same as registerOnChange() except that you should call this method when the control receives a touch event.
  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
    this.onTouched = fn;
  }
  
  // Angular does not know that the value has changed from the component, 
  // and must be updated with the new value.
  change($event) {
    this.onChange($event.target.textContent);
    console.log('textarea-expanded change() method fired $event: ', $event);
  }
  
  // This function is called when the control status changes to or from "DISABLED".
  // Depending on the value, it will enable or disable the appropriate DOM element.
  // Angular will call this method in one of the following cases:
  // 1. When you instantiate a new "FormControl" with the "disabled" property set to true. FormControl({value: '', disabled: true})
  // 2. When you call "control.disable()" or when you call "control.enable()" after you already called "control.disable()" at least once.
  setDisabledState(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
    const div = this.textarea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }
  
  ngOnChanges() {
    console.log('textarea-expanded ngOnChanges fired.');
  }

}

// <textarea-expanded [formControl]="control"></textarea-expanded>