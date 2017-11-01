import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'sccl-search-bar',
    templateUrl: './scclSearchBar.html',
    styleUrls: ['scclSearchBar.scss']
})
export class ScclSearchBarComponent {

    @Input()
    private properties: Object;

    @Output()
    private searchVarNotif = new EventEmitter<any>();

    private getSearchVariable(value) {
       this.searchVarNotif.emit(value);
    }
}
