import { Component, Input, OnInit, AfterViewInit, Output } from '@angular/core';
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
    private tablePack: Array<object>;
    private tableColumns: Array<object>;
    private tableData: Array<object>;
    private _$tablePackStream = [];

    constructor(private _scclTableService: ScclTableService) {
       if (this._$tablePackStream.length === 0 ) {
           this._scclTableService.getTablePackStream().subscribe((_dataStream) => {
               if (_dataStream.length !== 0) {
                   _dataStream.forEach((data) => {
                       this._$tablePackStream.push(data);
                   });
               }
            });
       }
    }

    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.initializeTable();
        }, 300);
    }

    getDocumentBody() {
        $('#addItemModal').appendTo('body');
    }

    public initializeTable() {
        this.tablePack = this._$tablePackStream;
        if (this.tablePack.length !== 0) {
            this.tableData = this.tablePack[0]['data'];
            this.tableColumns = this.tablePack[1]['columnConfig'];
            this.tableColumns.unshift(this.setTableRowDropDownBtn());
            this.tableColumns.push(this.setRowEditAndDeleteBtn());
            $('.sccl-table').tabulator(this.getTableProperties(this.tableData, this.tableColumns));
        }
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

     private setTableRowDropDownBtn() {
         return {formatter: () => `<i class='ion-ios-plus-outline'></i>`, width: 30,
             align: 'center',
             cellClick: function(row, dRow) {this.setDropDownIcon(row, dRow); }.bind(this), headerSort: false, responsive: 0};
     }

     private setRowEditAndDeleteBtn() {
         return  {formatter: () => `<i class='ion-android-more-horizontal'></i>`, width: 30,
             align: 'center', cellClick: () => console.log('more details'), headerSort: false, responsive: 0};
     }
}
