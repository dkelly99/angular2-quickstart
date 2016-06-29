import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

type Context = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link';
type Size = 'default' | 'sm' | 'xs' | 'lg';

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
    @Input()size: Size = 'default';
    @Input()isDisabled: Boolean = false;
    @Input()isBlock: Boolean = false;

    @Output()
    buttonClick = new EventEmitter<BaseButtonComponent>();

    onClick(event) {
        event.preventDefault();
        this.buttonClick.emit(this);
    }

    getSizeClassName () {
        return this.size === 'default' ? '' : 'btn-' + this.size;
    }

    constructor() {}

    ngOnInit() {}
}