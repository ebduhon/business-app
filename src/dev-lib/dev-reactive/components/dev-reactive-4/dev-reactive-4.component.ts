import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'dev-reactive-4',
  templateUrl: './dev-reactive-4.component.html',
  styleUrls: ['./dev-reactive-4.component.scss']
})
export class DevReactive4Component implements OnChanges, OnInit, OnDestroy {

  rootForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(){
  }

  ngOnInit() {
  }
  
  ngOnDestroy() {
  }
  
  // createForm() {
  //   this.rootForm = this.fb.group({
  //     id: '',
  //     fieldPropertyList: this.fb.array([]),
  //   });
  // }
  
  // get fieldPropertyList(): FormArray {
  //   return this.rootForm.get('fieldPropertyList') as FormArray;
  // }
  
  // setFieldPropertyList(fieldPropertyList: FieldProperty[]) {
    
  // }
  

}
