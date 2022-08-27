import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
  keyframes
} from '@angular/animations';


// stepper animation with keyframes
export const stepper = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
      }),
    ], { optional: true} ),
    group([
      query(':enter', [
        animate('1000ms ease', keyframes([
          style({ transform: 'scale(0.9)', offset: 0 }),
          style({ transform: 'scale(0.95)', offset: 0.3 }),
          style({ transform: 'scale(1)', offset: 1 }),
        ])),
      ], { optional: true} ),
      query(':leave', [
        animate('0ms ease', keyframes([
          style({ opacity: 0 }),
        ])),
      ], { optional: true} ),
    ]),
  ]),
]);
