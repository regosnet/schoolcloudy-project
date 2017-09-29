import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'sccl-table',
    templateUrl: './scclTable.html',
    styleUrls: ['./scclTable.scss']
})
export class ScclTableComponent implements OnInit, AfterViewInit {

    @Input()
    private _dataStream$ = new BehaviorSubject<any>({});

    @Input()
    private settings;

    @Input()
    private tableSchema = [];

    private data;

    @Input()
    private dataSource: Observable<any>;

    @Input()
    private tableName;
    private showColTitle = true;
    private scrollProperties;



    ngOnInit() {
        /*
        this._dataStream$.subscribe((data) => {
            this.dataSource.push(data);
        });*/
        this.scrollProperties = this.getScrollProperties();
    }

    ngAfterViewInit() {
       this.dataSource.subscribe((data) => {
           this.data = this.convertDataToObjects(data.json());
       });
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

    private getScrollProperties() {
        const properties: Object = {
                color: 'red',
                distance: 1230,
                wheelStep: 50,
                position: 'left',
                height: $(window).height() - 270
        };
    return properties;
    }
}
