import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
//TODO ChangeDetectionStrategy

@Component({
  selector: 'connectivity-indicator',
  templateUrl: './connectivity-indicator.component.html',
  styleUrls: ['./connectivity-indicator.component.scss'],
  animations: [
    trigger('connectivityState', [
      state('1', style({ color: '#4caf50', opacity: 0.46 })),
      state('0', style({ color: '#000000', opacity: 0.46 })),
      transition('0 => 1', [
        style({ color: '#000000', opacity: 0.46 }),
        animate('500ms ease-in', style({ color: '#4caf50', opacity: 0.46 }))
      ]),
      transition('1 => 0', [
        style({ color: '#4caf50', opacity: 0.46 }),
        animate('500ms ease-in', style({ color: '#000000', opacity: 0.46 }))
      ]),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 0.46 }))
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ConnectivityIndicatorComponent implements OnInit, OnChanges, OnDestroy {
  /**
   * state('disconnected', style({ color: '#000000', opacity: 0.46 })),
      state('connected', style({ color: '#4caf50', opacity: 0.46 })),
      transition('disconnected => connected', animate('3000ms ease-in')),
      transition('connected -> disconnected', animate('3000ms ease-out')),
      transition('void => disconnected', [
        style({ opacity: 0, color: '#000000' }),
        animate(3000, style({ opacity: 0.46, color: '#000000' }))
      ]),
      transition('disconnected => void', [
        style({ opacity: 0.46, color: '#000000' }),
        animate(3000, style({ opacity: 0, color: '#000000' }))
      ]),
      transition('void => connected', [
        style({ opacity: 0, color: '#000000' }),
        animate(3000, style({ opacity: 0.46, color: '#4caf50' }))
      ]),
      transition('connected => void', [
        style({ opacity: 0.46, color: '#4caf50' }),
        animate(3000, style({ opacity: 0, color: '#000000' }))
      ])
      
  */
  
  @Input()
  connectivity: boolean;

  constructor() { }
  
  logConnectivityAnimation($event) {
    //console.log($event)
  }

  ngOnInit() {
    
  }
  
  ngOnChanges() {
    console.log('ngOnChanges connectivity: ', this.connectivity);
  }
  
  ngOnDestroy() {
    
  }

}
