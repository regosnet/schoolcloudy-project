import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclAdminStudentComponent } from './scclAdminStudent.component';



// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ScclAdminStudentComponent
  }
];

export const ScclAdminStudentRouter: ModuleWithProviders = RouterModule.forChild(routes);
