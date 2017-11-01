import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'sccl-button',
    template: `
        <i
            class="{{btnClass}}"
            matTooltip="{{toolTipLabel}}"
            [matTooltipDisabled]="toolTipActive"
            [matTooltipPosition]="'above'"
            [matTooltipHideDelay]="1"
            [matTooltipClass]="'mat-tooltip'"
            (click)="triggerActions($event)">
        </i>
    `,
    styleUrls: ['./scclButton.scss']
})
export class ScclButtonComponent {
    @Input()
    private btnClass;


    @Input()
    private toolTipLabel;
    
    @Output()
    private actions = new EventEmitter<any>();

    constructor() {
    }
    
    private triggerActions(ev) {
        this.actions.emit(ev);
    }
}
