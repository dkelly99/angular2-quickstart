import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

type Context = "default" | "primary";

@Component({
    moduleId: module.id,
    selector: 'cdd-base-button',
    templateUrl: 'base-button.html',
    styleUrls: ['base-button.css']
})
export class BaseButtonComponent implements OnInit {
    
    @Input()context: Context = 'default';
    @Input()label: String = '';
    @Input()value: String = '';
    @Input()size: String = '';
    @Input()active: Boolean = true;
    @Input()isDisabled: Boolean = false;

    @Output()
    buttonClick = new EventEmitter<BaseButtonComponent>();

    onClick() {
        this.buttonClick.emit(this);
    }

    constructor() {}

    ngOnInit() {}
}