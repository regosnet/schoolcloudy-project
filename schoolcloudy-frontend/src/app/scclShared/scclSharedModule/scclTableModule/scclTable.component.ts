import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'sccl-table',
    templateUrl: './scclTable.html',
    styleUrls: ['./scclTable.scss']
})
export class ScclTableComponent implements OnInit {

    @Input()
    private _dataStream$ = new BehaviorSubject<any>({});

    @Input()
    private columnTitle;

    @Input()
    private tableSchema = [];

    @Input()
    private dataSource = [];

    @Input()
    private tableName;



    ngOnInit() {
        /*
        this._dataStream$.subscribe((data) => {
            this.dataSource.push(data);
        });*/
       this.dataSource = this.convertDataToObjects(this.dataSource);
    }

    getDocumentBody() {
        $('#addItemModal').appendTo('body');
    }

    private convertDataToObjects(data: Array<object>) {
        const converteData = [];
        data.forEach((dataObj) => {
            for (const [key, value] of Object.entries(dataObj)){
                 if (typeof value === 'object') {
                     for (const [oKey, oValue] of Object.entries(value)){
                         dataObj[oKey] = value[oKey];
                     }
                     delete(dataObj[key]);
                 }
            }
            converteData.push(dataObj);
        });
        return converteData;
    }
}
