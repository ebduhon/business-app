import { Component, forwardRef, Injector, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormControlName, FormGroup, FormGroupDirective, NgControl, NgForm, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators } from '@angular/forms';


export const PASSWORD_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PasswordFieldComponent),
  multi: true,
};

@Component({
  selector: 'password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
  providers: [
    PASSWORD_FIELD_VALUE_ACCESSOR
  ]
})
export class PasswordFieldComponent implements ControlValueAccessor, OnInit, OnDestroy {
  
  passwordForm: FormGroup;
  
  onChange = (password: string) => {
  };
  onTouched = () => {
  };
  
  ngControl: NgControl;
  
  constructor(private injector: Injector) { 
    this.passwordForm = new FormGroup({
      password: new FormControl('')
    });
    
    this.passwordForm.valueChanges.subscribe(data => this.onChange(this.value));
  }

  ngOnInit() {
    this.ngControl = this.injector.get(NgControl);
  }
  
  get value(): string {
    return this.passwordForm.get('password').value;
  }
  
  writeValue(password: string): void {
    this.passwordForm.get('password').setValue(password);
    this.onChange(this.value);
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {
    
  }
  
  ngOnDestroy() {
    
  }

}
