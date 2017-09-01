import { Component, Input } from '@angular/core';

@Component({
    selector: 'sccl-span-tag',
    template: `
        <span *ngFor="let items spanTagItems"></span>
        `
})
export class ScclSpanTagComponent {

    @Input()
    private spanTagItems: any;
}