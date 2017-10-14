import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { scclLayoutSizes } from '../../scclSharedModule/index';

@Injectable()
export class ScclTableService {
    private dataSource;
    private _dataStream$;

    constructor() {
        this.dataSource = [];
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
    }

    public setTableHeight() {
        return $(window).height() - 120;
    }

    public setTableResponsiveLayout(settings: Array<object>) {
        let sumColumnWidths = 0;
        const newTableColumns: Array<Object> = [];
        const windowWidth = $('.sccl-table').width() - 100;
        const tableColumn: Array<Object> = Array.from(settings);
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
                   column['width'] = (column['width'] - expandColumnWidths);
                });
            }
        }
        newTableColumns.unshift(this.setTableRowDropDownBtn());
        newTableColumns.push(this.setRowEditAndDeleteBtn());
        sumColumnWidths = 0;
        newTableColumns.forEach((column) => {
            sumColumnWidths += column['width'];
        });
        return newTableColumns;
    }

    public getDataSource() {
        return this.dataSource;
    }
    public setDataSource(dataSource: Array<object>) {
        this.dataSource = dataSource;
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
         if (cellElement.className === iconClass) {
             cellElement.className = 'ion-ios-minus-outline';
             div.innerHTML = this.getSubTable(dRow.getRow().row.data);
             rowElement.appendChild(div);
         }else {
            rowElement.removeChild(rowElement.lastChild);
             cellElement.className = 'ion-ios-plus-outline';
         }
     }

     private getSubTable(itemData: Object) {
         const imageUrl = 'assets/scclImages/profile/Kostya.png';
         return `
         <div class="card sccl-sub-table ` + itemData['firstName'] + `">
             <ul class="nav nav-tabs" role="tablist">
               <li class="nav-item">
                 <a class="nav-link active" data-toggle="tab" href="#profile` + itemData['firstName'] + `" role="tab">Profile</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" data-toggle="tab" href="#grade` + itemData['firstName'] + `" role="tab">Grades</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" data-toggle="tab" href="#messages` + itemData['firstName'] + `" role="tab">Messages</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" data-toggle="tab" href="#settings` + itemData['firstName'] + `" role="tab">Settings</a>
               </li>
             </ul>

             <!-- Tab panes -->
             <div class="tab-content">
               <div class="tab-pane fade show active" id="profile` + itemData['firstName'] + `" role="tabpanel">
                   <div class="container">
                       <div class="row">
                           <div class="col-sm-2">
                               <img src="` + imageUrl + `" alt="" class="img-thumbnail" height="100" width="100">
                           </div>
                           <div class="col-sm-5">
                               <p><strong>Name: </strong>` + itemData['firstName'] + ' ' +  itemData['lastName'] + `</p>
                           </div>
                       </div>
                   </div>
               </div>
               <div class="tab-pane fade" id="grade` + itemData['firstName'] + `" role="tabpanel">pane 2</div>
               <div class="tab-pane fade" id="messages` + itemData['firstName'] + `" role="tabpanel">pane 3</div>
               <div class="tab-pane fade" id="settings` + itemData['firstName'] + `" role="tabpanel">pane 4</div>
             </div>
         </div>
         `;
     }
}
