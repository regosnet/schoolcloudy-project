import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ScclLoginComponent } from './scclLogin.component';
import { ScclLoginService } from './scclLogin.service';
import { ScclLayoutModule } from '../scclLayoutModule/scclLayout.module';
import { ScclSharedModule } from '../../scclShared.module';

const routes: Routes = [
   {path: '', component: ScclLoginComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
    ScclLoginComponent
  ],
  providers: [ScclLoginService]
})
export class ScclLoginModule {}
