import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalState } from '../../scclGlobalState';

@Component({
    selector: 'sccl-admin-student',
    template: `
        <h3> Administrator / Students List</h3>
    `
})
export class ScclAdminStudentComponent {

    constructor(private translate: TranslateService, private _scclGlobalState: ScclGlobalState) {
        this._scclGlobalState.loggedIn.subscribe(res => console.log(res));
    }
}
