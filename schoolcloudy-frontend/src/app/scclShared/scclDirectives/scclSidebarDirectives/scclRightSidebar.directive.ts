import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[scclToggleRightSidebar]'
})
export class ScclRightSidebarDirective {
    constructor(private _elementRef: ElementRef) {
    }

    @HostListener('click')
    public collapesSidebar() {
       const rightSidebar = $('.sccl-right-sidebar-hidden');
       const bodyRightside = $('.al-main');
       rightSidebar.toggleClass('sccl-right-sidebar');
       bodyRightside.toggleClass('al-main-resize');
    }
}
