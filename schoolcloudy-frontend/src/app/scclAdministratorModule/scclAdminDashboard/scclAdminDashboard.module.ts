import { NgModule } from '@angular/core';
import { ScclAdminDashboardComponent } from './scclAdminDashboard.component';
import { ScclAdminDashboardRouter } from './scclAdminDashboard.router';
import { ScclSharedModule } from '../../scclShared/scclShared.module';
import { ScclTrafficChartComponent } from './scclTrafficChart/scclTrafficChart.component';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { ScclWeatherWidComponent } from './scclWeather/scclWeatherWid.component';



@NgModule({
    imports: [ScclAdminDashboardRouter,
              ScclSharedModule.forRoot(), 
              NbLayoutModule,
              NbSidebarModule,
              ],
    declarations: [ScclAdminDashboardComponent,
                   ScclTrafficChartComponent,
                   ScclWeatherWidComponent],
    providers: [NbSidebarService]
})
export class ScclAdminDashboardModule {
}
