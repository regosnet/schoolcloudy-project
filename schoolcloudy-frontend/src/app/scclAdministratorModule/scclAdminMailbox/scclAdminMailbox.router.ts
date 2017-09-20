import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclAdminMailboxComponent } from './scclAdminMailbox.component';



// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ScclAdminMailboxComponent
  }
];

export const ScclAdminMailboxRouter: ModuleWithProviders = RouterModule.forChild(routes);
