import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-layout-button',
  templateUrl: './dev-layout-button.component.html',
  styleUrls: ['./dev-layout-button.component.scss']
})
export class DevLayoutButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  fromParent($event) {
    console.log('From parent.');
  }
  
  fromChild($event) {
    console.log('From child.');
    console.log($event);
    
  }

}
