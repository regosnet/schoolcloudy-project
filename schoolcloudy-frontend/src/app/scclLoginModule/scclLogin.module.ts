import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScclLoginRouting } from './scclLogin.routing';
import { ScclLoginService } from './scclLogin.service';
import { ScclLoginComponent } from './scclLogin.component';
import { AppTranslationModule } from '../scclTranslatingModule';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ScclLoginRouting,
    AppTranslationModule
  ],
  declarations: [
    ScclLoginComponent
  ],
  providers: [ScclLoginService]
})
export class ScclLoginModule {}
