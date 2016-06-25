import {Component, ViewChild, ViewContainerRef, ComponentResolver} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-demo',
    template: `<div #attachPoint></div>`
})
export class DemoComponent {
    @ViewChild('attachPoint', {read: ViewContainerRef}) attachPoint;

    constructor(
        public view:ViewContainerRef,
        public compResolver:ComponentResolver
    ){}

    ngAfterViewInit(){
        const qs = window.location.href.split('?')[1];
        const url = qs + '.demo';

        const importer = url => Observable.fromPromise(SystemJS.import(url));
        const resolve = myModule => Observable.fromPromise(this.compResolver.resolveComponent(myModule.Demo));

        importer(url)
            .switchMap(myModule => resolve(myModule))
            .subscribe(factory => {
                const comp = this.attachPoint.createComponent(factory).instance;
                //comp.someProp = "Show me how this works...";
            }, () => {
                this.attachPoint.element.nativeElement.innerHTML = 'Demo not found: [' + qs + ']';
            })
    }
}
