import { Component } from '@angular/core';
import { BaseButtonComponent } from './base-button';

@Component({
    selector: 'demo',
    directives: [BaseButtonComponent],
    template: `
    <h1>Here is a demo of BaseButtonComponent...</h1>
    <cdd-base-button></cdd-base-button>
    `
})
export class Demo{}