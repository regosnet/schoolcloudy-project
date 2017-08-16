import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ScclNotFoundComponent } from './scclNotFound.component';


const routes: Routes = [
  {path: '', component: ScclNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScclNotFoundRouter {
}
