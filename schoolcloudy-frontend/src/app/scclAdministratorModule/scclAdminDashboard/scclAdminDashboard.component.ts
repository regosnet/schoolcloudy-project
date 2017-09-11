import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'sccl-administrator-dashboard',
    templateUrl: './scclAdministratorDashboard.html',
    styleUrls: ['./scclAdministratorDashboard.scss']
})
export class ScclAdminDashboardComponent {
    listOne: Array<any> = [
                           {name: 'Weather', img: {name: 'weather-widget'}},
                           {name: 'Calendar', img: {name: 'calendar'}},
                           {name: 'Upcomings', data: {}},
                           {name: 'Projects', data: {}},
                           {name: 'Shortcuts', data: {}}
                           ];
    constructor( private translate: TranslateService) {
    }
    asideLayout: Object = {
            color: 'red',
            distance: 295,
            wheelStep: 2,
            position: 'left',
            height: $(window).height() - 50
    };
}
