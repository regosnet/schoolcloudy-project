import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'sccl-delete-all-button',
    template: `
        <sccl-button [btnClass]="ion-trash-a" [toolTipLabel]="Delete all"></sccl-button>
    `,
    styles: [`

    `]
})
export class ScclDeleteAllButtonComponent {
}
