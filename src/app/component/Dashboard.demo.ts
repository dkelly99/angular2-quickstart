import {Component} from '@angular/core';
import DashboardComponent from './Dashboard';

@Component({
    selector: 'demo',
    directives: [DashboardComponent],
    template: `
    <h1>Here is a demo of DasboardComponent...</h1>
    <my-dashboard></my-dashboard>

    <h1>... and here is another!</h1>
    <my-dashboard></my-dashboard>
    `
})
export class Demo{}