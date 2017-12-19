import { trigger, state, animate, style, transition } from '@angular/core';

export function routerTransition() {
    return trigger('routerTransition', [
        state('void', style({ opacity: 1 })),
        state('*', style({ opacity: 1 })),

        /* Enter */
        transition(':enter', [
            style({
                position: 'absolute',
                top: 'calc(100% - 113px)',
                left: '100%',
                width: '0%',
                height: '0%',
                overflow: 'hidden',
                opacity: 0
            }),
            animate('500ms 500ms', style({
                position: 'absolute',
                top: '113px',
                left: '0%',
                width: '100%',
                height: 'calc(100% - 113px)',
                overflow: 'hidden',
                opacity: 1
            }))
        ]),

        /* Leave */
        transition(':leave', [
            style({
                position: 'absolute',
                top: '113px',
                left: '0%',
                width: '100%',
                height: 'calc(100% - 113px)',
                overflow: 'hidden',
                opacity: 1
            }),
            animate('499ms', style({
                position: 'absolute',
                top: 'calc(100% - 113px)',
                left: '0%',
                width: '0%',
                height: '0%',
                overflow: 'hidden',
                opacity: 0
            }))
        ])
    ]);
}
