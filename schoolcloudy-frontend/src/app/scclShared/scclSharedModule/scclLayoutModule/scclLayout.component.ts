import { Component, HostListener, OnInit, Input} from '@angular/core';
import { scclLayoutSizes } from './scclLayout.constants';
import { ScclGlobalState } from '../../../scclGlobalState';

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
    constructor() {
    }
    ngOnInit(): void {
        this.windowResizer();
    }

    @HostListener('window:resize')
    getCurrentWindowSize() {
       this.windowResizer();
    }

   private windowResizer(): void {
        if ($(window).width() <= scclLayoutSizes.resWidthHideSidebar) {
            this.width = ($(window).width() - 10);
        }else if ($(window).width() <= scclLayoutSizes.resWidthCollapseSidebar) {
            this.width = ($(window).width() - 70);
        }else {
            this.width = ($(window).width() - 200);
        }
    }
}
