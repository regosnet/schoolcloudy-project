import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { scclLayoutSizes } from '../../scclSharedModule/index';
import { ScclSubTableComponent } from './scclSubTable/scclSubTable.component';

@Injectable()
export class ScclTableService {
    private dataSource;
    private tableData;
    private tableSchema;
    private _dataStream$;

    constructor(private resolver: ComponentFactoryResolver,
            private injector: Injector,
            private app: ApplicationRef) {
        this.dataSource = [];
        this.tableData = [];
        this.tableSchema = [];
        this._dataStream$ = new BehaviorSubject([]);
        if (this.getDataSource().length === 0) {
            this.setTablePack();
        }
    }

    public getTableStream() {
        return this._dataStream$;
    }

    public setTablePack() {
       this.getTableStream().subscribe((tableConfig) => {
           tableConfig.forEach((data) => {
               this.getDataSource().push(data);
           });
       });
       setTimeout(() => {
           this.setTableResponsiveLayout();
}, 700);
    }


    public setTableResponsiveLayout() {
        let sumColumnWidths = 0;
        let newTableColumns: Array<Object> = [];
        const windowWidth = $('.sccl-table').width() - 100;
        const tableColumn: Array<Object> = Array.from(this.getDataSource()[1]['tableSchema']);
        let newWidth = 0;
        let index = 0;
        tableColumn.forEach((column) => {
            sumColumnWidths += column['width'];
        });
        if (Math.floor(sumColumnWidths) > windowWidth) {

            while (newWidth < windowWidth) {
                newTableColumns.push(tableColumn[index]);
                newWidth += tableColumn[index]['width'];
                index++;
            }
            if (newWidth % windowWidth !== 0) {
                const expandColumnWidths = (newWidth - windowWidth) / newTableColumns.length;
                newTableColumns.forEach((column) => {
                   column['width'] = (column['width'] - expandColumnWidths);
                });
            }
        }else {
            const expandColumnWidths = (windowWidth - sumColumnWidths ) / tableColumn.length;
            console.log(expandColumnWidths);
            tableColumn.forEach((column) => {
               column['width'] = (column['width'] + expandColumnWidths);
            });
            newTableColumns = tableColumn;
        }
        newTableColumns.unshift(this.setTableRowDropDownBtn());
        newTableColumns.push(this.setRowEditAndDeleteBtn());
        sumColumnWidths = 0;
        newTableColumns.forEach((column) => {
            sumColumnWidths += column['width'];
        });
        this.setTableSchema(newTableColumns);
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

     public getDataSource() {
         return this.dataSource;
     }
     public setDataSource(dataSource: Array<object>) {
         this.dataSource = dataSource;
     }
     public getTableData() {
         return this.tableData;
     }
     public setTableData(tableData: Array<object>) {
         this.tableData = tableData;
     }
     public getTableSchema() {
         return this.tableSchema;
     }
     public setTableSchema(tableSchema: Array<object>) {
         this.tableSchema = tableSchema;
     }
}
