import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalState } from '../../scclGlobalState';
import { Administrator } from '../../scclShared/scclModels/administrator/administrator';
import { ScclAdmininstratorService } from '../scclAdministrator.service';

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
            private _administratorService: ScclAdmininstratorService) {
        this._scclGlobalState.loggedIn.subscribe(res => console.log(res));
    }

    ngOnInit(): void {
        this.settings =
            [
             {columnTitle: 'ID', dataKey: ['externalId']},
             {columnTitle: 'Name', dataKey: ['firstName', 'lastName']},
             {columnTitle: 'Email', dataKey: ['email']},
             {columnTitle: 'Address', dataKey: ['street', 'houseNumber', 'city']},
             {columnTitle: 'Username', dataKey: ['username']},
             {columnTitle: 'Gender', dataKey: ['gender']},
             ];
        this.tableSchema = this.setDataSchema();

        this.data = this._administratorService.getStudents();
    }

    setDataSchema() {
        return [
                    {title: 'externalId'}, {title: 'firstName'},
                    {title: 'lastName'}, {title: 'credential'}
                ];
    }
}
