import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclLayoutComponent } from './scclLayout.component';


export const routes: Routes = [
  {
    path: '',
    component: ScclLayoutComponent
  }
];

export const ScclLoginRouter: ModuleWithProviders = RouterModule.forChild(routes);
