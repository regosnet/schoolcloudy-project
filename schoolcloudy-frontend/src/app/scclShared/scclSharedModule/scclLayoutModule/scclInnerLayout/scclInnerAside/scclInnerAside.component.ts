import { Component } from '@angular/core';
import { scclLayoutSizes } from '../../scclLayout.constants';

@Component({
    selector: 'sccl-inner-aside-layout',
    templateUrl: './scclInnerAside.html',
    styleUrls: ['./scclInnerAside.scss']
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
