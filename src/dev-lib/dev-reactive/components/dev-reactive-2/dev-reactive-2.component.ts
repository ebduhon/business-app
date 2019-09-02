import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { DevReactive2Service } from '../../services/dev-reactive-2.service';

@Component({
  selector: 'dev-reactive-2',
  templateUrl: './dev-reactive-2.component.html',
  styleUrls: ['./dev-reactive-2.component.scss']
})
export class DevReactive2Component implements OnInit, OnChanges, OnDestroy {

  constructor(private devReactive2Service: DevReactive2Service) { }

  ngOnInit() {
    this.devReactive2Service.onMount();
  }

  ngOnChanges() {
    
  }
  
  ngOnDestroy() {
    
  }
  
  manualUnmount() {
    this.devReactive2Service.onUnmount();
  }
}
