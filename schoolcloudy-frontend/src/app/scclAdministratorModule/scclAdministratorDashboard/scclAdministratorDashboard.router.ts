import { Routes, RouterModule } from '@angular/router';
import { ScclAdministratorDashboardComponent } from './scclAdministratorDashboard.component';
import { ModuleWithProviders } from '@angular/core';


// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ScclAdministratorDashboardComponent
  }
];

export const ScclAdministratorDashboardRouter: ModuleWithProviders = RouterModule.forChild(routes);
