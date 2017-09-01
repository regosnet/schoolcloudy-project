import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { ScclAdministratorComponent } from './scclAdministrator.component';



// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'administrator',
    component: ScclAdministratorComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: './scclAdminDashboard/scclAdminDashboard.module#ScclAdminDashboardModule'},
      {path: 'academics', loadChildren: './scclAdminAcademics/scclAdminAcademics.module#ScclAdminAcademicsModule'},
      {path: 'students', loadChildren: './scclAdminStudent/scclAdminStudent.module#ScclAdminStudentModule'}
    ]
  }
];

export const ScclAdministratorRouter: ModuleWithProviders = RouterModule.forChild(routes);

