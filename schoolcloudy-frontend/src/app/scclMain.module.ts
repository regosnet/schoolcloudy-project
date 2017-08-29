import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScclMainComponent } from './scclMain.component';
import { ScclGlobalState } from './scclGlobalState';
import { ScclSharedModule } from './scclShared/scclShared.module';
import { ScclAdministratorComponent } from './scclAdministratorModule/scclAdministrator.component';
import { ScclMainRouter } from './scclMain.router';
import { ScclAdministratorModule } from './scclAdministratorModule/scclAdministrator.module';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from './scclTranslatingModule';
import { ScclLoginModule } from './scclShared/scclSharedModule/scclLoginModule/scclLogin.module';



@NgModule({
  declarations: [
    ScclMainComponent
  ],
  imports: [
    BrowserModule,
    ScclMainRouter,
    ScclAdministratorModule
  ],
  providers: [ScclGlobalState],
  bootstrap: [ScclMainComponent]
})
export class ScclMainModule { }
