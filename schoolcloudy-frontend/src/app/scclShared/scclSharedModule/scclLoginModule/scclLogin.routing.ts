import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclLoginComponent } from './scclLogin.component';


export const routes: Routes = [
  {
    path: 'login', loadChildren: '../scclLayoutModule/scclLayout.module#ScclLayoutModule'}
];

export const ScclLoginRouting: ModuleWithProviders = RouterModule.forChild(routes);
