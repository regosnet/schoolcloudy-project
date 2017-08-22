import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'sccl-administrator-dashboard',
    template: '<h1>Administrator Dashboard</h1>'
})
export class ScclAdminDashboardComponent {

    constructor( private translate: TranslateService) {

    }
   
}
