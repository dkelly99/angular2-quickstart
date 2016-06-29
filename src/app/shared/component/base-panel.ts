import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

type Context = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link';
//type Size = 'default' | 'sm' | 'xs' | 'lg';

@Component({
    moduleId: module.id,
    selector: 'cdd-base-panel',
    templateUrl: 'base-panel.html',
    styleUrls: ['base-panel.css']
})
export class BasePanelComponent implements OnInit {

    @Input()context: Context = 'default';
    @Input()title: String = '';
    @Input()content: String = '';
    @Input()footer: String = '';
    //@Input()size: Size = 'default';
    //@Input()isDisabled: Boolean = false;
    //@Input()isBlock: Boolean = false;

    /*@Output()
    buttonClick = new EventEmitter<BaseButtonComponent>();

    onClick(event) {
        event.preventDefault();
        this.buttonClick.emit(this);
    }

    getSizeClassName () {
        return this.size === 'default' ? '' : 'btn-' + this.size;
    }*/

    getHeaderClassName() {
        return this.title === '' ? 'hidden' : '';
    }

    getFooterClassName() {
        return this.footer === '' ? 'hidden' : '';
    }

    /*isHeaderHidden() {
        return this.title === '';
    }
*/
    constructor() {}

    ngOnInit() {}
}