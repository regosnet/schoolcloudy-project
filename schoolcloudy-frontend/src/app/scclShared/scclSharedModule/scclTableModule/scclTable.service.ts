import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { scclLayoutSizes } from '../../scclSharedModule/index';

@Injectable()
export class ScclTableService {
    private _dataStream$;

    constructor() {
        this._dataStream$ = new BehaviorSubject([]);
    }
    public getTablePackStream() {
        return this._dataStream$;
    }

    public setTablePack() {
        this.getTablePackStream().subscribe((data) => {
            this._dataStream$.next(data);
        });
    }

    public setTableHeight() {
        return $(window).height() - 120;
    }

    public setTableResponsiveLayout(settings: any) {
        let sumColumnWidths = 0;
        const newTableColumns: Array<Object> = [];
        const windowWidth = $('.sccl-table').width();
        const tableColumn: Array<Object> = Array.from(settings.mainTableColumns);
        tableColumn.forEach((column) => {
            sumColumnWidths += column['width'];
        });
        if (Math.floor(sumColumnWidths) > windowWidth) {
            let newWidth = 0;
            let index = 0;
            while (newWidth < windowWidth) {
                newTableColumns.push(tableColumn[index]);
                newWidth += tableColumn[index]['width'];
                index++;
            }
            if (newWidth % windowWidth !== 0) {
                const expandColumnWidths = (newWidth - windowWidth) / newTableColumns.length;
                newTableColumns.forEach((column) => {
                   column['width'] += expandColumnWidths;
                });
            }
        }
        return newTableColumns;
    }
}
