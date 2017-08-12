import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclLoginComponent } from './scclLogin.component';


export const routes: Routes = [
  {
    path: '',
    component: ScclLoginComponent
  }
];

export const ScclLoginRouting: ModuleWithProviders = RouterModule.forChild(routes);
