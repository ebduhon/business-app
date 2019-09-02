/**
 * References:
 * https://youtu.be/Oh9wj-1p2BM
 * https://angular.io/api/animations/animate
 * https://angular.io/api/animations/animateChild
 * https://angular.io/api/animations/query
 * https://angular.io/api/animations/group
 * https://angular.io/api/animations/AnimationBuilder
 */

/** Animations Callback $event property contains details about the animation */
// $event == {
//   element: any,
//   fromState: string,
//   toState: string,
//   totalTime: number,
//   triggerName: string,
//   phaseName: string
// }

/** animation() function
 * https://angular.io/api/animations/animate
 * • defines a reusable animation
 * • input variables
 * • transition() uses it
 * • sub animation()s
 * • animateChild() is used to invoke it
 */


/**
 * @param
 * $start
 * 
 * @param
 * $end, default: 1
 */
 
// export var fadeIn = animation([
//   style({ 
//     opacity: '$start'
//   }),
//   animate(1000, style({ 
//     opacity: '$end'
//   }))
// ], { end: 1 });

/** @param
 * $duration, default: 1 second
 */
// export var fadeOut = animation([
//   // the starting opacity is auto detected
//   animate('$duration', 
//     style({ opacity: 0 }))
// ], { duration: 1000 });

/** input variables
 * • You can define input variables that can be passed into an animation, 
 *   then the animation can consume those variables.
 * animateChild() accepts input params
 * animateChild(aniamtion, { input: 'param' })
 */
 

/** Example 1: fader.component

import {fadeIn, fadeOut} from './fade-animation';

trigger('fade', [
  transition('* => in',
    animateChild(fadeIn, { start: 0 }))
    
  transition('* => out',
    animateChild(fadeOut, { duration: '$customTime' }))
], { customTime: '2s' })

*/


/** Example 2: Binding data from the Component

<div [@fade]="exp></div>

@Component({...})
class DemoFadeComponent {
  exp = { value: 'in', customTime: 1000 };
}

*/



/** query() animations
 * https://angular.io/api/animations/query
 * • Collects inner items
 * • Uses querySelector/querySelectorAll
 * • Can detect enter/leave & active animations
 * 
 * Enables "stagger" which is querying multiple elements, 
 * so that there is a delay to start the animation of each element.
 */
 
/** Example 3:


<div class="container" *ngIf="active" @reveal>
  <h2>title</h2>
  <p>text</p>
  <p>text</p>
  <img />
</div>

trigger('reveal', [
  transition(':enter', [
    // 1. shrink the container to be small
    // 2. hide all inner children
    // 3. animate the container and inner children
  ])
]),

// we want to query and select the container and the children,
// and animate in parallel so we have a nice smooth animation

// 1.
style({ overflow: 'hidden', height: 0 }), // container

// 2.
queryAll('*', style({ opacity: 0 }) // children

// 3.
group([
  animate('0.5s', style({ height: '*' }), // container
  queryAll('*', animate(500, style({ opacity: 1 })) // children
])

*/

/** programmatic animations
 * AnimationBuilder
 * https://angular.io/api/animations/AnimationBuilder
 * • Builds animations on the fly
 * • Player access
 * • frame-by-frame control
 */
 
/** Example 4

class DemoLoadingComponent {
  constructor(builder: AnimationBuilder) {
    this._builder = builder;
  }
  start(percentage: number) {
    const definition = this._builder.build([
      style({ width: 0 }),
      animate(1000, style({
        width: (percentage * 100) + '%'
      }))
    ]);
    
    const player = definition.create(element);
    return player;
  }
  
  player.play();
  player.pause();
  player.finish();
  player.onDone(callback);
  player.setPosition(percentage);
  player.destroy();
}

*/


/** route animations
 * Animations + Routes
 * • RouteOutlet contains the data
 * • Transitions = route changes
 */
 
/** Example 5:
 
<div [@routerAnimations]="prepareRoute(r)">
  <router-outlet #r="outlet"></router-outlet>
</div>

// input function prepareRoute() takes in the outer-outlet directive and examines the route config to determine which animation to run
class AppCmp {
  prepareRoute(r) {
    return r.activeRoute ? r.activeRoute.config
      .animation : '';
  }
}

// in addition to specifying animation.value, 
// you can pass in additional variables that will be consumed in the animation
const ROUTES = [{
  path: '',
  component: IndexPageComponent,
  animation: {
    value: 'home',
    // more data
  }, {
    path: '',
    component: AboutPageComponent,
    animation: {
      value: 'about',
      // more data
    }
  }
}]

trigger('routerAnimations', [
  transition('home => about', group([
    query('home-page', [...]),
    query('about-page', [...])
  ])),
  transition('* => *', [
    query(':enter', [...]),
    query(':leave', [...])
  ])
])

// Using query(':enter', [...]), query(':leave', [...]) you can animate dynamic routes 

*/