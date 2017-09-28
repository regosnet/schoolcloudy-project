import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalState } from '../../scclGlobalState';
import { Administrator } from '../../scclShared/scclModels/administrator/administrator';

@Component({
    selector: 'sccl-admin-student',
    templateUrl: './scclAdminStudent.html',
    styleUrls: ['./scclAdminStudent.scss']
})
export class ScclAdminStudentComponent implements OnInit {

    private columnTitle;
    private data;
    private tableName = 'Students';
    private tableSchema;

    constructor(private translate: TranslateService, private _scclGlobalState: ScclGlobalState) {
        this._scclGlobalState.loggedIn.subscribe(res => console.log(res));
    }

    ngOnInit(): void {
        this.columnTitle =
            [
             {title: 'ID', dt: ['externalId']},
             {title: 'Name', dt: ['firstName', 'lastName']},
             {title: 'UserName', dt: ['username']},
             {title: 'Status', dt: ['status']},
             {title: 'Address', dt: ['houseNo', 'street']}
             ];
        this.tableSchema = this.setDataSchema();

        this.data = [
                     {
                         externalId: 'SM0989',
                         firstName: 'Ihechukwudere',
                         lastName: 'Okoroego',
                         status: 'Student',
                         credential: {username: '@Ihechukwudere'},
                         contact: {houseNo: 102, street: 'Lilly Street'}
                     },
                     {
                         externalId: 'SM898',
                         firstName: 'Rolands',
                         status: 'Student',
                         lastName: 'Wilsonify',
                         credential: {username: '@wilson'},
                         contact: {houseNo: 3, street: 'Adams Street'}
                      }
                    ];
    }

    setDataSchema() {
        return [
                    {title: 'externalId'}, {title: 'firstName'},
                    {title: 'lastName'}, {title: 'credential'}
                ];
    }
}
