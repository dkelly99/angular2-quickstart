import { Component } from '@angular/core';
import { BaseButtonComponent } from './base-button';

@Component({
    selector: 'demo',
    directives: [BaseButtonComponent],
    template: `
        <h1>BaseButtonComponent...</h1>
        <p>{{demoMessage}}</p>
            <cdd-base-button (buttonClick)="demoHandler($event)" [label]="'default'"></cdd-base-button>
            <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'primary'" [label]="'primary'"></cdd-base-button>
            <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'success'" [label]="'success'"></cdd-base-button>
            <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'info'" [label]="'info'"></cdd-base-button>
            <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'warning'" [label]="'warning'"></cdd-base-button>
            <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'danger'" [label]="'danger'"></cdd-base-button>
            <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'link'" [label]="'link'"></cdd-base-button>
        <p>
            <cdd-base-button (buttonClick)="demoHandler($event)" [label]="'active'"></cdd-base-button>
            <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'primary'" [isDisabled]="true" [label]="'isDisabled'"></cdd-base-button>
        </p>`
})
export class Demo {
    
    demoMessage: String = 'Please click one of the buttons below!';

    demoHandler = (buttonComponent) => {
        console.dir(buttonComponent);
        this.demoMessage = buttonComponent.label + ' was clicked';
    }
}