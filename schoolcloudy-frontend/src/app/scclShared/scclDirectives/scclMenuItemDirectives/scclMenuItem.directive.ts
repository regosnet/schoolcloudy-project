import { Directive, HostListener, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { scclLayoutSizes, ScclMenuItemComponent } from '../../scclSharedModule';
import { ScclTableService } from '../../scclSharedModule/scclTableModule/scclTable.service';

@Directive({
    selector: '[scclMenuItemDirective]'
})
export class ScclMenuItemDirective {

    private isMenuCollapsed = true;

    @ViewChild(ScclMenuItemDirective)
    private menuSubItem;
    constructor(private el: ElementRef, private rd: Renderer2) {

    }

    @HostListener('click')
    getCurrentWindowSize() {
    }
    @HostListener('click')
    clicked() {
        console.log(this.menuSubItem);
    }
}
