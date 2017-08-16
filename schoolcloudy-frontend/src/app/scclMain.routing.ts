import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
      path: 'login',
      loadChildren: './scclShared/scclSharedModule/scclLoginModule/scclLogin.module#ScclLoginModule'
    },
  { path: '**', redirectTo: 'not-found' },
  {path: 'not-found', loadChildren: './scclShared/scclSharedModules/scclNotFoundModule/scclNotFound.module#ScclNotFoundModule'}
];

export const ScclMainRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
