import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScclLoginRouting } from './scclLogin.routing';
import { ScclLoginService } from './scclLogin.service';
import { ScclLoginComponent } from './scclLogin.component';
import { ScclLayoutModule } from '../scclLayoutModule/scclLayout.module';
import { AppTranslationModule } from '../../../scclTranslatingModule';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ScclLoginRouting,
    AppTranslationModule,
    ScclLayoutModule
  ],
  declarations: [
    ScclLoginComponent
  ],
  providers: [ScclLoginService]
})
export class ScclLoginModule {}
