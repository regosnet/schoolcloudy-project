import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
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
    private settings;

    private data: Array<Object>;

    @Input()
    private tableName;
    private showColTitle = true;
    private scrollProperties;
    private filterKey = '';
    private filteredItems: any;
    private pages = 10;
    private pagesIndex: Array<number>;
    private pageNumber = 0;
    private currentIndex = 1;
    private pageSize = 100;
    private pageStart = 1;
    private items;
    private actions;

    constructor(private _scclTableService: ScclTableService) {
        this._scclTableService.getDataStream().subscribe((res) => {
              this.data = res;
              this.data.sort((a, b) => {
                  if (a['internalId'] < b['internalId']) {
                      return -1;
                  }else if (a['internalId'] > b['internalId']) {
                      return 1;
                  }else {
                      return 0;
                  }
              });
              this.initilizePagination(this.data);
        });
    }

    ngOnInit() {
        this.scrollProperties = this.getScrollProperties();
    }

    ngAfterViewInit() {}

    getDocumentBody() {
        $('#addItemModal').appendTo('body');
    }

    private getScrollProperties() {
        const properties: Object = {
                color: 'red',
                distance: 1230,
                wheelStep: 10,
                position: 'left',
                height: $(window).height() - 270
        };
        return properties;
    }

    private initilizePagination(data: Array<object>) {
        this.currentIndex = 1;
        this.pageStart = 1;
        this.pages = 10;
        this.pageNumber = parseInt('' + (this.data.length / this.pageSize), 10);

        if (this.data.length % this.pageSize !== 0) {
          this.pageNumber ++;
           console.log(this.data.length % this.pageSize);
        }

        if (this.pageNumber  < this.pages) {
              this.pages =  this.pageNumber;
        }

        this.refreshItems();
        console.log('this.pageNumber :  ' + this.pageNumber);
    }

    private fillArray(): any {
        const obj = new Array();
        for (let index = this.pageStart; index < this.pageStart + this.pages; index ++) {
                    obj.push(index);
        }
        return obj;
     }

   private refreshItems() {
                 this.items = this.data.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
                 this.pagesIndex =  this.fillArray();
     }

   private prevPage() {
       if (this.currentIndex > 1) {
          this.currentIndex --;
       }
       if (this.currentIndex < this.pageStart) {
          this.pageStart = this.currentIndex;
       }
       this.refreshItems();
    }


    private nextPage(){
       if (this.currentIndex < this.pageNumber){
             this.currentIndex ++;
       }
       if (this.currentIndex >= (this.pageStart + this.pages)){
          this.pageStart = this.currentIndex - this.pages + 1;
       }

       this.refreshItems();
    }


     setPage(index: number){
          this.currentIndex = index;
          this.refreshItems();
     }
}
