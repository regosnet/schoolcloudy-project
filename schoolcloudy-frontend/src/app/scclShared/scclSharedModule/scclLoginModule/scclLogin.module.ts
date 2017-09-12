import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ScclLoginComponent } from './scclLogin.component';
import { ScclLoginService } from './scclLogin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../../scclTranslatingModule';
import { ScclSharedModule } from '../../scclShared.module';

const routes: Routes = [
   {path: '', component: ScclLoginComponent}
];

@NgModule({
    imports: [
              RouterModule.forChild(routes),
              ScclSharedModule.forRoot(),
              CommonModule,
              AppTranslationModule,
              ReactiveFormsModule,
              FormsModule
              ],
    exports: [RouterModule],
    declarations: [
    ScclLoginComponent
  ],
  providers: [ScclLoginService]
})
export class ScclLoginModule {}
