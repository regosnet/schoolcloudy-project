import { Component, Input } from '@angular/core';

@Component({
    selector: 'sccl-layout',
    templateUrl: './scclLayout.html',
    styleUrls: ['./scclLayout.scss']
})
export class ScclLayoutComponent {

    @Input()
    private _elements: HTMLElement;

    constructor() {
    }
}
