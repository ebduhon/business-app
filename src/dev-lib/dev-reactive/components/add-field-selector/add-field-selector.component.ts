import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';

import { AddFieldSelectorService } from '../../services/add-field-selector.service';
import { DevReactiveQuery1Service } from '../../services/dev-reactive-query-1.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Component({
  selector: 'add-field-selector',
  templateUrl: './add-field-selector.component.html',
  styleUrls: ['./add-field-selector.component.scss']
})
export class AddFieldSelectorComponent implements OnInit {

  fieldTypeList = [
    { value: 'checkbox-0', viewValue: 'Checkbox', disabled: false },
    { value: 'input-1', viewValue: 'Input', disabled: false },
    { value: 'select-2', viewValue: 'Select', disabled: false }
  ];
  
  filterTypeList = [
    { value: 'small', viewValue: 'Small' },
    { value: 'medium', viewValue: 'Medium' },
    { value: 'large', viewValue: 'Large' },
    { value: 'x-large', viewValue: 'Extra Large' }
  ];
  
  fieldTypeListValueData$: Observable<any[]>;
  fieldTypeListSnapshotData$: Observable<any>;
  fieldTypeListStateData$: Observable<any>;
  
  items$;
  size$;
  
  rootForm: FormGroup;
  
  
  constructor(public fb: FormBuilder, private afDb: AngularFireDatabase, private addFieldSelectorService: AddFieldSelectorService, private devReactiveQuery1Service: DevReactiveQuery1Service) {
  
    this.items$ = this.devReactiveQuery1Service.items$;
    this.size$ = this.devReactiveQuery1Service.size$;
    
    this.createForm();
  }

  ngOnInit() {
    
    this.fieldTypeListValueData$ = this.addFieldSelectorService.getFieldTypeListValueChanges();
    this.fieldTypeListSnapshotData$ = this.addFieldSelectorService.getFieldTypeListSnapshotChanges();
    this.fieldTypeListSnapshotData$
    .map(actions => {
      actions.forEach(action => {
        console.log(action.type);
        console.log(action.key);
        console.log(action.payload.val());
      })
    })
    .subscribe();
    // this.fieldTypeListStateData$ = this.addFieldSelectorService.getFieldTypeListStateChanges();
  }
  
  filterBy(size: string|null) {
    this.devReactiveQuery1Service.filterBy(size);
  }

  onSelect($event) {
    console.log('selected $event: ', $event);
  }
  
  onFilterSelected($event) {
    
    if ($event.value == null) {
      
    }
    
    this.devReactiveQuery1Service.filterBy($event.value);
  }
  
  createForm() {
    this.rootForm = this.fb.group({
      filterField: ''
    });
  }
  
  clearFilter() {
    this.rootForm.get('filterField').setValue(null);
    
    this.devReactiveQuery1Service.filterBy(null);
  }
  

}
