import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalState } from '../../scclGlobalState';
import { Administrator } from '../../scclShared/scclModels/administrator/administrator';
import { ScclAdmininstratorService } from '../scclAdministrator.service';
import { ScclTableService } from '../../scclShared/scclSharedModule/scclTableModule/scclTable.service';

@Component({
    selector: 'sccl-admin-student',
    templateUrl: './scclAdminStudent.html',
    styleUrls: ['./scclAdminStudent.scss']
})
export class ScclAdminStudentComponent implements OnInit {

    private settings;
    private data;
    private tableName = 'Students';
    private tableSchema;

    constructor(private translate: TranslateService,
            private _scclGlobalState: ScclGlobalState,
            private _administratorService: ScclAdmininstratorService,
            private _scclTableService: ScclTableService) {
        this._administratorService.getStudents().subscribe((data) => {
            this._scclTableService.getDataStream().next(data.json());
        });
    }

    ngOnInit(): void {
        this.settings =
            [
             {columnTitle: 'ID', dataKey: ['internalId']},
             {columnTitle: 'Name', dataKey: ['firstName', 'lastName']},
             {columnTitle: 'Email', dataKey: ['email']},
             {columnTitle: 'Address', dataKey: ['street', 'houseNumber', 'city']},
             {columnTitle: 'Username', dataKey: ['username']},
             {columnTitle: 'Gender', dataKey: ['gender']},
             ];
    }
}
