import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'sccl-delete-button',
    template: `
        <sccl-button [btnClass]="ion-trash-a" [toolTipLabel]="Delete"></sccl-button>
    `,
    styles: [`

    `]
})
export class ScclDeleteButtonComponent {
}
