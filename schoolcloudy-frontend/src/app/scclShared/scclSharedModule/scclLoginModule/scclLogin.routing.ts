import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ScclLoginComponent } from './scclLogin.component';


export const routes: Routes = [
  {
    path: '', component: ScclLoginComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class ScclLoginRouting {
}
