import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclAdminAcademicsComponent } from './scclAdminAcademics.component';


// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ScclAdminAcademicsComponent
  }
];

export const ScclAdminAcademicsRouter: ModuleWithProviders = RouterModule.forChild(routes);
