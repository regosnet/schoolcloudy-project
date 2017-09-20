import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalState } from '../../scclGlobalState';

@Component({
    selector: 'sccl-admin-student',
    templateUrl: './scclAdminStudent.html',
    styleUrls: ['./scclAdminStudent.scss']
})
export class ScclAdminStudentComponent {

    constructor(private translate: TranslateService, private _scclGlobalState: ScclGlobalState) {
        this._scclGlobalState.loggedIn.subscribe(res => console.log(res));
    }
    
    getDocumentBody() {
        $('#myModal').appendTo('body')
    }
}
