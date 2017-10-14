import { Component, Input, OnInit, AfterViewInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ScclTableService } from './scclTable.service';
import { ScclGlobalState } from "../../../scclGlobalState";


@Component({
    selector: 'sccl-table',
    templateUrl: './scclTable.html',
    styleUrls: ['./scclTable.scss']
})
export class ScclTableComponent implements OnInit, AfterViewInit {

    @Input()
    private tableTitle;
    showExtraClass = true;
    toolTipActive = false;

    constructor(private _scclTableService: ScclTableService, private _scclGlobalState: ScclGlobalState) {
        this._scclGlobalState.subscribe('menu.isDataChanged', (isDataChanged) => {
            console.log(isDataChanged)
            if (isDataChanged) {
                this.getTableDataAndSchema();
            }
        });
    }

    ngOnInit() {
        this.getTableDataAndSchema();
    }
    ngAfterViewInit() {}

    getDocumentBody() {
        $('#addItemModal').appendTo('body');
    }

    private getTableProperties(data: any, columnTitle: any) {
        return {
            height: this._scclTableService.setTableHeight(),
            data: data,
            placeholder: 'No Data Available',
            pagination: 'local',
            paginationSize: 40,
            layout: 'fitDataFill',
            addRowPos: 'bottom',
            resizableColumns: false,
            //responsiveLayout: true,
            //footerElement: $(`<div class='tabulator-footer' (click)="setCellIcon()"><button>Custom Button</button></div>`),
            columns: columnTitle
        };
    }

    private initializeTable(tableConfig: Array<object>) {
        console.log(tableConfig);
        if (tableConfig.length !== 0) {
            const data = tableConfig[0]['data'];
            const columns: Array<object> = tableConfig[1]['tableSchema'];
            $('.sccl-table').tabulator(this.getTableProperties(data, columns));
        }
    }


    private getTableDataAndSchema() {
        if (this._scclTableService.getDataSource().length === 0) {
            setTimeout(() => {
               this.initializeTable(this._scclTableService.getDataSource());
            }, 1000);
        }else {
            this.initializeTable(this._scclTableService.getDataSource());
        }
    }
}
