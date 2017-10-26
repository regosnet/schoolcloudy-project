import { Component, Input, OnInit, AfterViewInit, Output, Injector, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
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
    showExtraClass = true;
    toolTipActive = false;

    constructor(private _scclTableService: ScclTableService) {
    }

    ngOnInit() {
        this.getTableDataAndSchema();
        $( window ).resize(() => $('.sccl-table').tabulator('redraw', true));
    }
    ngAfterViewInit() {}

    getDocumentBody() {
        $('#addItemModal').appendTo('body');
    }

    private getTableProperties(data: any, columns: any) {
        return {
            height: () => $(window).height() - 120,
            data: data,
            placeholder: 'No Data Available',
            pagination: 'local',
            paginationSize: 40,
            layout: 'fitDataFill',
            addRowPos: 'bottom',
            resizableColumns: false,
            columns: this._scclTableService.getTableSchema()
        };
    }

    private initializeTable(tableConfig: Array<object>) {
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
