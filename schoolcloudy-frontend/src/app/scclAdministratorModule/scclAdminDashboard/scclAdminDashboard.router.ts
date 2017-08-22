import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclAdminDashboardComponent } from './scclAdminDashboard.component';


// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ScclAdminDashboardComponent
  }
];

export const ScclAdminDashboardRouter: ModuleWithProviders = RouterModule.forChild(routes);
