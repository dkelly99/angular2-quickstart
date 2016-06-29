import { Component } from '@angular/core';
import { BaseButtonComponent } from './base-button';

@Component({
    selector: 'demo',
    directives: [BaseButtonComponent],
    template: `
    <h1>BaseButtonComponent...</h1>
    <cdd-base-button (buttonClick)="demoHandler($event)" [handler]="demoHandler" [label]="'default'"></cdd-base-button>
    <cdd-base-button [handler]="demoHandler" [context]="'primary'" [label]="'primary'"></cdd-base-button>
    <cdd-base-button [handler]="demoHandler" [context]="'success'" [label]="'success'"></cdd-base-button>
    <cdd-base-button [handler]="demoHandler" [context]="'info'" [label]="'info'"></cdd-base-button>
    <cdd-base-button [handler]="demoHandler" [context]="'warning'" [label]="'warning'"></cdd-base-button>
    <cdd-base-button [handler]="demoHandler" [context]="'danger'" [label]="'danger'"></cdd-base-button>
    <cdd-base-button [handler]="demoHandler" [context]="'link'" [label]="'link'"></cdd-base-button>
    <p>
        <cdd-base-button [label]="'active'"></cdd-base-button>
        <cdd-base-button [context]="'primary'" [isDisabled]="true" [label]="'isDisabled'"></cdd-base-button>
    </p>`
})
export class Demo {
    
    demoHandler: Function = (button) => console.dir(button);

}