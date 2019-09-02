import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { DevReactive1Service } from '../../services/dev-reactive-1.service';

@Component({
  selector: 'dev-reactive-1',
  templateUrl: './dev-reactive-1.component.html',
  styleUrls: ['./dev-reactive-1.component.scss']
})
export class DevReactive1Component implements OnInit, OnChanges, OnDestroy {

  constructor(private devReactive1Service: DevReactive1Service) { }

  ngOnInit() {
    this.devReactive1Service.init();
    this.devReactive1Service.onMount();
  }

  ngOnChanges() {
    
  }
  
  ngOnDestroy() {
    
  }
  
  manualUnmount() {
    this.devReactive1Service.onUnmount();
  }
}
