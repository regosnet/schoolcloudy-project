import { NgModule } from '@angular/core';
import { ScclAdminDashboardComponent } from './scclAdminDashboard.component';
import { ScclAdminDashboardRouter } from './scclAdminDashboard.router';
import { ScclSharedModule } from '../../scclShared/scclShared.module';
import { ScclTrafficChartComponent } from './scclTrafficChart/scclTrafficChart.component';
import { ScclWeatherWidComponent } from './scclWeather/scclWeatherWid.component';



@NgModule({
    imports: [ScclAdminDashboardRouter,
              ScclSharedModule.forRoot()
              ],
    declarations: [ScclAdminDashboardComponent,
                   ScclTrafficChartComponent,
                   ScclWeatherWidComponent],
})
export class ScclAdminDashboardModule {
}
