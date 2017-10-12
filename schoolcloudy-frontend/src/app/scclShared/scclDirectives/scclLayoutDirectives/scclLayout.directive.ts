import { Directive, HostListener, ElementRef } from '@angular/core';
import { scclLayoutSizes } from '../../scclSharedModule/index';
import { ScclLayoutService } from '../../scclSharedModule/scclLayoutModule/scclLayout.service';

@Directive({
    selector: '[scclLayoutDirective]'
})
export class ScclLayoutDirective {

    private isMenuCollapsed = true;


    constructor(private _scclLayoutService: ScclLayoutService) {
        this._scclLayoutService.windowResizer(1);
    }

    @HostListener('window:resize')
    getCurrentWindowSize() {
       this._scclLayoutService.windowResizer(1);
    }

    @HostListener('click')
    clicked() {
        $('.sccl-inner-layout').toggleClass('rightSideBarCollapsedL');
        if (this.isMenuCollapsed) {
            this._scclLayoutService.windowResizer(-124);
            this.isMenuCollapsed = false;
        }else {
            this._scclLayoutService.windowResizer(1);
            this.isMenuCollapsed = true;
        }
    }

}
