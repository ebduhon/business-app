import { Component, OnInit } from '@angular/core';

import { AddFieldSelectorService } from '../../services/add-field-selector.service';

@Component({
  selector: 'add-field-button',
  templateUrl: './add-field-button.component.html',
  styleUrls: ['./add-field-button.component.scss']
})
export class AddFieldButtonComponent implements OnInit {

  constructor(private addFieldSelectorService: AddFieldSelectorService) { }

  ngOnInit() {
  }
  
  addField() {
    
    // let inputFieldConfig = [
    //   { fieldType: 'input', property: 'key', required: true },
    //   { fieldType: 'input', property: 'value', required: true }
    // ];
    
    let inputFieldConfig1 = { fieldType: 'input', property: 'key', type: 'string' };
    let inputFieldConfig2 = { fieldType: 'input', property: 'value', type: 'string' };
    // let checkboxFieldConfig1 = { fieldType: 'checkbox', property: 'key', type: 'string' };
    // let checkboxFieldConfig2 = { fieldType: 'checkbox', property: 'value', type: 'boolean' };
    
    
    // ErrorStateMatcher:
    // https://github.com/angular/material2/blob/master/src/lib/core/error/error-options.ts
    
    // let inputFieldConfig = {
    //   fieldType: 'input',
    //   errorStateMatcher: '',
    //   placeholder: '',
    //   controlType: '',
    //   disabled: false,
    //   empty: false,
    //   errorState: false,
    //   focused: false,
    //   id: '',
    //   ngControl: '',
    //   readonly: '',
    //   required: '',
    //   shouldPlaceholderFloat: false,
    //   stateChanges: '',
    //   type: '',
    //   value: ''
    // };
    
    this.addFieldSelectorService.addField(inputFieldConfig2);
  }

}
