import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'sccl-edit-button',
    template: `
        <sccl-button [btnClass]="ion-ios-compose-outline" [toolTipLabel]="Edit"></sccl-button>
    `,
    styles: [`

    `]
})
export class ScclEditButtonComponent {
}
