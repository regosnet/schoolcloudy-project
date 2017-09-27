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
             {title: 'ID'},
             {title: 'First Name'},
             {title: 'Last Name'},
             {title: 'UserName'},
             {title: 'Status'},
             {title: 'Address'},
             {title: 'Email'},
             {title: 'Department'}
             ];
        this.tableSchema = this.setDataSchema();

        this.data = [{externalId: 'SM0989', firstName: 'Ihechukwudere', lastName: 'Okoroego',
            credential: '@ihechukwudere'},
                            {externalId: 'SM0989', firstName: 'Ihechukwudere', lastName: 'Okoroego',
                credential: '@ihechukwudere'},
                            ];
    }

    setDataSchema() {
        return [
                    {title: 'externalId'}, {title: 'firstName'},
                    {title: 'lastName'}, {title: 'credential'}
                ];
    }
}
