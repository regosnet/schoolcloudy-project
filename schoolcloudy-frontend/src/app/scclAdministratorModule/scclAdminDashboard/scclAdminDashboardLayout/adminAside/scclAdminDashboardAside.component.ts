import { Component } from '@angular/core';

@Component({
    selector: 'sccl-admin-dashboard-aside',
    templateUrl: './scclAdminDashboardAside.html',
    styleUrls: ['./scclAdminDashboardAside.scss']
})
export class ScclAdminDashboardAsideComponent {
    listOne: Array<any> = [
                           {name: 'Weather', img: {name: 'weather-widget'}},
                           {name: 'Calendar', img: {name: 'calendar'}},
                           {name: 'Upcomings', data: {}},
                           {name: 'Projects', data: {}},
                           {name: 'Shortcuts', data: {}}
                           ];
    constructor() {
    }
    asideLayout: Object = {
            color: 'red',
            distance: 295,
            wheelStep: 2,
            position: 'left',
            height: $(window).height() - 50
    };
}
