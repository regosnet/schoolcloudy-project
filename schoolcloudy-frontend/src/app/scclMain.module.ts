import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ScclMainComponent } from './scclMain.component';
import { ScclAdministratorComponent } from './scclAdministratorModule/scclAdministrator.component';
import { ScclMainRouter } from './scclMain.router';
import { ScclAdministratorModule } from './scclAdministratorModule/scclAdministrator.module';
import { ScclLoginModule } from './scclShared/scclSharedModule/scclLoginModule/scclLogin.module';
import { AppTranslationModule } from './scclTranslatingModule';
import { NbThemeModule } from '@nebular/theme';



@NgModule({
  declarations: [
    ScclMainComponent
  ],
  imports: [
    BrowserModule,
    ScclMainRouter,
    ScclAdministratorModule,
    BrowserAnimationsModule,
    AppTranslationModule,
    NbThemeModule.forRoot({ name: 'default' })
  ],

  bootstrap: [ScclMainComponent]
})
export class ScclMainModule { }
