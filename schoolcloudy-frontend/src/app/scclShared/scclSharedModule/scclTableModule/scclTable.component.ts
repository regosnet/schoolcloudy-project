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
    }

    getDocumentBody() {
        $('#addItemModal').appendTo('body');
    }
}
