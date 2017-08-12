import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
      path: 'login',
      loadChildren: 'app/login/login.module#LoginModule'
    },
  { path: '**', redirectTo: 'not-found' },
  {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'}
];

export const ScclMainRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
