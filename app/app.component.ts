import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `,
    directives: [HeroesComponent],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
