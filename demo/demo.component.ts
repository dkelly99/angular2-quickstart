import {Component, ViewChild, ViewContainerRef, ComponentResolver} from '@angular/core';
import {Observable} from 'rxjs/Rx';
//import DashboardComponent from '../src/app/component/Dashboard';

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
        const url = 'app/component/Dashboard.demo';

        const importer = url => Observable.fromPromise(SystemJS.import(url));
        const resolve = comp => Observable.fromPromise(this.compResolver.resolveComponent(comp));

        importer(url)
            .switchMap(comp => resolve(comp.Demo))
            .subscribe(factory => {
                const comp = this.attachPoint.createComponent(factory).instance;
                //comp.someProp = "Show me how this works...";
            })
    }
}
