import { Component } from '@angular/core';

@Component({
    selector: 'sccl-traffic-chart',
    templateUrl: './scclTrafficChart.html',
    styleUrls: ['./scclTrafficChart.scss']
})
export class ScclTrafficChartComponent {
    private trafficInfo: Array<object>;

    constructor() {
        this.trafficInfo =
            [
                 {title: 'Students', no: 2394},
                 {title: 'Staffs', no: 102},
                 {title: 'Online Users', no: 10023},
                 {title: 'Online Users', no: 10023}
             ];
    }
}
