import { Component } from '@angular/core';
import { BaseButtonComponent } from './base-button';  //SUT
import { BasePanelComponent } from './base-panel';

@Component({
    selector: 'demo',
    directives: [BaseButtonComponent, BasePanelComponent],
    template: `
        <h1>BaseButtonComponent...</h1>
        <h3>{{demoMessage}}</h3>

        <cdd-base-panel title="context: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link'">
            <div body>
                <cdd-base-button (buttonClick)="demoHandler($event)" [label]="'default'"></cdd-base-button>
                <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'primary'" [label]="'primary'"></cdd-base-button>
                <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'success'" [label]="'success'"></cdd-base-button>
                <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'info'" [label]="'info'"></cdd-base-button>
                <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'warning'" [label]="'warning'"></cdd-base-button>
                <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'danger'" [label]="'danger'"></cdd-base-button>
                <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'link'" [label]="'link'"></cdd-base-button>
            </div>
        </cdd-base-panel>

        <cdd-base-panel title="isDisabled: true | false">
            <div body>
                <cdd-base-button (buttonClick)="demoHandler($event)" [label]="'active'"></cdd-base-button>
                <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'primary'" [isDisabled]="true" [label]="'isDisabled'"></cdd-base-button>
            </div>
        </cdd-base-panel>


        <cdd-base-panel title="size: 'default' | 'sm' | 'xs' | 'lg'">
            <div body>
                <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'primary'" [size]="'xs'" [label]="'xs'"></cdd-base-button>
                <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'primary'" [size]="'sm'" [label]="'sm'"></cdd-base-button>
                <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'primary'" [size]="'default'" [label]="'default'"></cdd-base-button>
                <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'primary'" [size]="'lg'" [label]="'lg'"></cdd-base-button>
            </div>
        </cdd-base-panel>

        <cdd-base-panel title="isBlock: Boolean">
            <div body>
                <p>
                    <cdd-base-button (buttonClick)="demoHandler($event)" [context]="'primary'" [isBlock]="true" [label]="'block level button - primary'"></cdd-base-button>
                </p>
                <p>
                    <cdd-base-button (buttonClick)="demoHandler($event)" [isBlock]="true" [label]="'block level button - default'"></cdd-base-button>
                </p>
            </div>
        </cdd-base-panel>
        `
})
export class Demo {
    
    demoMessage: String = 'Please click one of the buttons below!';

    demoHandler = (buttonComponent) => {
        console.dir(buttonComponent);
        this.demoMessage = buttonComponent.label + ' was clicked';
    }
}