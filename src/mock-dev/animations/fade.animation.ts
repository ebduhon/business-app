import { AnimationEntryMetadata } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';

export const fadeAnimation: AnimationEntryMetadata = 
  trigger('routeAnimation', [
    state('void', style({ opacity: 0 }) ),
    state('*', style({ opacity: 1 }) ),
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.5s ease-in')
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('0.5s ease-out', style({ opacity: 0 }))
    ])
  ]);