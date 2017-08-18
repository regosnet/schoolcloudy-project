import { NgModule } from '@angular/core';
import { ScclAdministratorDashboardComponent } from './scclAdministratorDashboard.component';
import { ScclAdministratorDashboardRouter } from './scclAdministratorDashboard.router';

@NgModule({
    imports: [ScclAdministratorDashboardRouter],
    exports: [],
    declarations: [ScclAdministratorDashboardComponent]
})
export class ScclAdministratorDashboardModule {
}