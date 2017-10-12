import { Component, HostListener, OnInit, Input} from '@angular/core';

import { ScclGlobalState } from '../../../scclGlobalState';
import { ScclLayoutService } from './scclLayout.service';

@Component({
    selector: 'sccl-layout',
    templateUrl: './scclLayout.html',
    styleUrls: ['./scclLayout.scss']
})
export class ScclLayoutComponent implements OnInit {

    private width: number;
    private height: number;

    @Input()
    private main = false;
    constructor(private _scclLayoutService: ScclLayoutService) {
    }
    ngOnInit(): void {
        this._scclLayoutService.windowResizer(1);
        this._scclLayoutService.getWidth().subscribe((width) => {
            this.width = width;
        });
    }
}
