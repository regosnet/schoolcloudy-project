import { Component, Output, EventEmitter } from '@angular/core';
import { ScclTableService } from '../scclTable.service';

@Component({
    selector: 'sccl-table-modal',
    templateUrl: './scclTableModal.html',
    styleUrls: ['./scclTableModal.scss']
})
export class ScclTableModalComponent {
    private searchBarProperties = {background: '#fff', width: '100%'};
    private data;

    @Output()
    private notifyWithSearchVar = new EventEmitter<any>();

    constructor(private _scclTableService: ScclTableService) {
        this._scclTableService._$newDataStream.subscribe((data) => {
            this.data = data;
        });
    }
    
    private onSearchVariable(value) {
        this.notifyWithSearchVar.emit(value);
    }
}
