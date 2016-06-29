import { Component } from '@angular/core';
import { BasePanelComponent } from './base-panel';

@Component({
    selector: 'demo',
    directives: [BasePanelComponent],
    template: `
        <h1>BasePanelComponent...</h1>

        <cdd-base-panel context="default">
            <div body>Simple default panel<br>no title and no footer
            </div>
        </cdd-base-panel>

        <cdd-base-panel context="primary" title="panel title (context = 'primary')" footer="panel footer">
            <div body>Panel with context=primary<br>title and footer included
            </div>
        </cdd-base-panel>

        <cdd-base-panel context="info" title="panel title (context = 'info')">
            <div body>Panel with context=info<br>title, but no footer
            </div>
        </cdd-base-panel>

        <cdd-base-panel context="warning" footer="panel footer (context = 'warning')">
            <div body>Panel with context=warning<br>footer, but no title
            </div>
        </cdd-base-panel>

`
})
export class Demo {}