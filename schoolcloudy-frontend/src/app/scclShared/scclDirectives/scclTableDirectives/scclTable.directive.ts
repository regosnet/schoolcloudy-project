import { Directive, HostListener, ElementRef, Renderer2} from '@angular/core';
import { scclLayoutSizes } from '../../scclSharedModule/index';
import { ScclTableService } from '../../scclSharedModule/scclTableModule/scclTable.service';

@Directive({
    selector: '[scclTableDirective]'
})
export class ScclTableDirective {

    private isMenuCollapsed = true;


    constructor(private _scclTableService: ScclTableService, private el: ElementRef, private rd: Renderer2) {
        
    }

    @HostListener('window:resize')
    getCurrentWindowSize() {
        //this._scclTableService.setTableResponsiveLayout();
        $('.sccl-table').tabulator('redraw', true);
        //$("#example-table").tabulator("deleteColumn", "name");
    }
    @HostListener('click')
    clicked() {
        console.log(this.el.nativeElement)
    }
}
