import {Component} from '@angular/core';
import {HeroService} from '../service/hero.service';
import Heroes from './heroes.component';

@Component({
    selector: 'demo',
    directives: [Heroes],
    providers: [HeroService],
    template: `
    <h1>Here is a demo of my-heroes...</h1>
    <my-heroes></my-heroes>
    `
})
export class Demo{}