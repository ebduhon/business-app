import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators } from '@angular/forms';

import { DevReactive3Service } from '../../services/dev-reactive-3.service';




@Component({
  selector: 'dev-reactive-3',
  templateUrl: './dev-reactive-3.component.html',
  styleUrls: ['./dev-reactive-3.component.scss']
})
export class DevReactive3Component {
  
  constructor(private devReactive3Service: DevReactive3Service) { }

}
