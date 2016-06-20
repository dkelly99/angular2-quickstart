//console.log(module.id);

import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroService }     from './service/hero.service';
import Heroes from './component/heroes.component';
import DashboardComponent from './component/Dashboard';

@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,

    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})
@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: Heroes
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    }
])
export class AppComponent {
    title = 'Tour of Heroes';
}
