import { 
  ComponentFactoryResolver, 
  ComponentFactory,
  ComponentRef, 
  Directive, 
  Input, 
  OnChanges, 
  OnInit, 
  TemplateRef,
  Type, 
  ViewContainerRef 
} from '@angular/core';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Tabnav } from '../../framework-store/tabnav';
import { TabnavFacade } from '../../framework-store/tabnav/tabnav.facade';
import * as TabnavActions from '../../framework-store/tabnav/tabnav.actions';


//import component to by dynamically created
import { TabnavComponent } from '../tabnav/tabnav.component';


@Directive({
  selector: '[tabnavAnchor]'
})
export class TabnavAnchorDirective implements OnInit, OnChanges {
  
  //vm
  //vmDefinition
  //routes
  //label
  
  @Input()
  config: any;

  componentRef: ComponentRef<any>;

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {}
    
  ngOnInit() {
    // default to the first available option
    // this.selectedComponentType = this.componentTypes ? this.componentTypes[0] : null;
  }
  
  ngOnChanges() {
    if (this.componentRef) {
      this.componentRef.instance.config = this.config;
    }
  }
  
  createTabnav(componentType: Type<any>, data?: any): ComponentRef<TabnavComponent> {
    this.viewContainerRef.clear();
    
    let tabnavComponentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    
    this.componentRef = this.viewContainerRef.createComponent(tabnavComponentFactory);
    
    // tabnavComponentRef.instance.close.subscribe(() => {
    //   tabnavComponentRef.destroy();
    // });
    
    this.componentRef.instance.config = this.config;
    
    return this.componentRef;
  }
  
  

  
  
}