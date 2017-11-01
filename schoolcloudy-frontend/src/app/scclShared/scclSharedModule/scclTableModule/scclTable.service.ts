import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { scclLayoutSizes } from '../../scclSharedModule/index';
import { ScclSubTableComponent } from './scclSubTable/scclSubTable.component';

@Injectable()
export class ScclTableService {
    private tableLocalStorage;
    private _dataStream$;
    public _$newDataStream;

    constructor(private resolver: ComponentFactoryResolver,
            private injector: Injector,
            private app: ApplicationRef) {
        this.tableLocalStorage = [];
        this._dataStream$ = new BehaviorSubject([]);
        this._$newDataStream = new BehaviorSubject([]);
        this.setTablePack();
    }

    public getTableStream() {
        return this._dataStream$;
    }

    public setTablePack() {
       this.getTableStream().subscribe((tableConfig) => {
           tableConfig.forEach((data) => {
               this.getTableLoacalStorage().push(data);
           });
       });
    }


    public setTableColumnLayout(tableSchema: Array<Object>): Array<Object> {

        let newTableColumns: Array<Object> = [];
        const windowWidth = $('.sccl-table').width() - 100;
        let newWidth = 0;
        let index = 0;

        if (this.sumColumnsWidth(tableSchema) > windowWidth) {

            while (newWidth < windowWidth) {
                newTableColumns.push(tableSchema[index]);
                newWidth += tableSchema[index]['width'];
                index++;
            }
            if (newWidth % windowWidth !== 0) {
                const expandColumnWidths = (newWidth - windowWidth) / newTableColumns.length;
                newTableColumns.forEach((column) => {
                   column['width'] = (column['width'] - expandColumnWidths);
                });
            }
        }else {
            const expandColumnWidths = (windowWidth - this.sumColumnsWidth(tableSchema) ) / tableSchema.length;
            tableSchema.forEach((column) => {
               column['width'] = (column['width'] + expandColumnWidths);
            });
            newTableColumns = tableSchema;
        }
        newTableColumns.unshift(this.setTableRowDropDownBtn());
        newTableColumns.push(this.setRowEditAndDeleteBtn());
        /*sumColumnWidths = 0;
        newTableColumns.forEach((column) => {
            sumColumnWidths += column['width'];
        });*/
        return newTableColumns;
    }

    private sumColumnsWidth(tableSchema: Array<Object>): number {
        let sumColumnWidths = 0;
        tableSchema.forEach((column) => {
            sumColumnWidths += column['width'];
        });
        return Math.floor(sumColumnWidths);
    }

    private setTableRowDropDownBtn() {
        return {formatter: () => `<i class='ion-ios-plus-outline'></i>`, width: 30,
            align: 'center',
            cellClick: function(row, dRow) {this.setDropDownIcon(row, dRow); }.bind(this), headerSort: false, responsive: 0};
    }

    private setRowEditAndDeleteBtn() {
        return  {formatter: () => `<i class='ion-android-more-horizontal'></i>`, width: 30,
            align: 'center', cellClick: () => console.log('more details'), headerSort: false, responsive: 0};
    }

    public setDropDownIcon(cell, dRow) {
        const iconClass = 'ion-ios-plus-outline';
        const rowElement = dRow.getRow().getElement()[0];
         const cellElement = dRow.getElement()[0].childNodes[0];
         const div = document.createElement('div');
         div.id = 'sub-table';
         const factory = this.resolver.resolveComponentFactory(ScclSubTableComponent);
         if (cellElement.className === iconClass) {
             cellElement.className = 'ion-ios-minus-outline';
             rowElement.appendChild(div);
             const ref = factory.create(this.injector, [], div);
             this.app.attachView(ref.hostView);
         }else {
            rowElement.removeChild(rowElement.lastChild);
             cellElement.className = 'ion-ios-plus-outline';
         }
     }

     public getTableLoacalStorage() {
         return this.tableLocalStorage;
     }
     public setTableLocalStorage(data: Array<object>) {
         this.tableLocalStorage = data;
     }
}
