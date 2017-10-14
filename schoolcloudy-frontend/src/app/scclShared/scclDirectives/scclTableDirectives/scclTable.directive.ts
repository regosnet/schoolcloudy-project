import { Directive, HostListener, ElementRef } from '@angular/core';
import { scclLayoutSizes } from '../../scclSharedModule/index';
import { ScclTableService } from '../../scclSharedModule/scclTableModule/scclTable.service';

@Directive({
    selector: '[scclTableDirective]'
})
export class ScclTableDirective {

    private isMenuCollapsed = true;


    constructor(private _scclTableService: ScclTableService) {

    }

    @HostListener('window:resize')
    getCurrentWindowSize() {
        //$('.sccl-table').tabulator('addColumn', {title:'internalId', field:'internalId'}, true, 'IntId');
        //$("#example-table").tabulator("deleteColumn", "name");
    }
}
