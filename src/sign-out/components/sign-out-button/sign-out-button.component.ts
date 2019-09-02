import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'sign-out-button',
  templateUrl: './sign-out-button.component.html',
  styleUrls: ['./sign-out-button.component.scss']
})
export class SignOutButtonComponent implements OnInit, OnDestroy {
  
  //TODO: create a similar sign-out-menu-item.component
  
  //TODO: move error and loading related logic and interactions to a different notification and loader related component
  
  //TODO:
  // @Input()
  // set loading() {}
  
  //TODO:
  // @Input()
  // error(): string;

  //TODO:
  // @Input()
  // errorCode: string;
  
  //TODO:
  // @Input()
  // errorMessage: string;
  
  @Output()
  triggered = new EventEmitter();
  
  constructor() { }
  
  onSignOut() {
    //TODO: pass payload { isAuthenticated = false }
    this.triggered.emit();
    console.log('sign-out-button clicked.');
  }

  ngOnInit() {
    console.log('sign-out-button.component ngOnInit lifecycle hook fired.');
  }
  
  ngOnDestroy() {
    console.log('sign-out-button.component ngOnDestroy lifecycle hook fired.');
  }

}
