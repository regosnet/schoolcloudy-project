import {
        Component,
        Input,
        OnInit,
        AfterViewInit,
        Output,
        Injector,
        ApplicationRef,
        ComponentFactoryResolver,
        EventEmitter
    } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ScclTableService } from './scclTable.service';


@Component({
    selector: 'sccl-table',
    templateUrl: './scclTable.html',
    styleUrls: ['./scclTable.scss']
})
export class ScclTableComponent implements OnInit, AfterViewInit {

    @Input()
    private tableTitle;

    @Input()
    private tableSchema;

    @Output()
    private addItemToTable = new EventEmitter<any>();
    private searchColumns = [];

    private tableControlButtons = [];

    public items: Array<string>;

    private searchBarPorperties = {background: '#2D3635', width: '100%'};

    showExtraClass = true;
    toolTipActive = false;

    constructor(private _scclTableService: ScclTableService) {
    }

    ngOnInit() {
        $('.sccl-table').tabulator(this.getTableProperties());
        this.tableControlButtons = this.setTableControlButtons();
    }
    ngAfterViewInit() {
        $('.sccl-table').tabulator('setColumns', this.tableSchema);
        if (this._scclTableService.getTableLoacalStorage().length === 0) {
            setTimeout(() => {
                $('.sccl-table').tabulator('setData', this._scclTableService.getTableLoacalStorage());
            }, 1000);
        }else {
            $('.sccl-table').tabulator('setData', this._scclTableService.getTableLoacalStorage());
        }
    }

    private getTableProperties() {
        return {
            height: () => $(window).height() - 120,
            placeholder: 'No data found',
            pagination: 'local',
            paginationSize: 40,
            layout: 'fitDataFill',
            addRowPos: 'bottom',
            resizableColumns: false,
            columns: []
        };
    }

    private addNewItemToTable(value) {
        this.addItemToTable.emit(value);
    }

    private openTableModal() {
        $('#add-new').modal({
            backdrop: 'static'
        }).appendTo('body');
    }

    private tableSearchFilter(searchStr) {
        this.setSearchColumns(searchStr);
      //$('.sccl-table').tabulator('setFilter', this.searchColumns);
    }

    private setSearchColumns(searchStr) {
        const s_col = [];
        const data = $('.sccl-table').tabulator('getData')[0];
        const columns = $('.sccl-table').tabulator('getColumns').filter((col) => col.getField() !== undefined);
        columns.forEach((col) => {
            const created_cols = {};
            if (typeof data[col.getField()] !== 'object') {
                if (data[col.getField()] !== undefined) {
                created_cols['field'] = col.getField();
                created_cols['type'] = 'like';
                created_cols['value'] = searchStr;
                s_col.push(created_cols);
                }
            }
        });
        this.searchColumns = s_col;
    }

    private setTableControlButtons() {
        return [
                    {class: 'ion-plus-round', toolTipLabel: 'Add New', action: this.openTableModal},
                    {class: 'ion-refresh', toolTipLabel: 'Refresh', action: this.refreshTable},
                    {class: 'ion-ios-trash', toolTipLabel: 'Delete All', action: this.refreshTable}
                ];
    }

    private refreshTable() {
        
    }
}
