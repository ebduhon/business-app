import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
//TODO ChangeDetectionStrategy

@Component({
  selector: 'user-presence-indicator',
  templateUrl: './user-presence-indicator.component.html',
  styleUrls: ['./user-presence-indicator.component.scss'],
  animations: [
    trigger('userPresenceState', [
      state('online', style({ color: '#4caf50', opacity: 0.46 })),
      state('away', style({ color: '#ffc107', opacity: 0.46 })),
      state('offline', style({ color: '#000000', opacity: 0.46 })),
      transition('online => away', [
        style({ color: '#4caf50', opacity: 0.46 }),
        animate('500ms ease-in', style({ color: '#ffc107', opacity: 0.46 }))
      ]),
      transition('online => offline', [
        style({ color: '#4caf50', opacity: 0.46 }),
        animate('500ms ease-in', style({ color: '#000000', opacity: 0.46 }))
      ]),
      transition('away => online', [
        style({ color: '#ffc107', opacity: 0.46 }),
        animate('500ms ease-in', style({ color: '#4caf50', opacity: 0.46 }))
      ]),
      transition('away => offline', [
        style({ color: '#ffc107', opacity: 0.46 }),
        animate('500ms ease-in', style({ color: '#000000', opacity: 0.46 }))
      ]),
      transition('offline => online', [
        style({ color: '#000000', opacity: 0.46 }),
        animate('500ms ease-in', style({ color: '#4caf50', opacity: 0.46 }))
      ]),
      transition('offline => away', [
        style({ color: '#000000', opacity: 0.46 }),
        animate('500ms ease-in', style({ color: '#ffc107', opacity: 0.46 }))
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
export class UserPresenceIndicatorComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input()
  presence: string;

  constructor() { }
  
  logUserPresenceAnimation($event) {
    //console.log($event);
  }

  ngOnInit() {
  }
  
  ngOnChanges() {
    console.log('ngOnChanges presence: ', this.presence);
  }
  
  ngOnDestroy() {
    
  }

}
