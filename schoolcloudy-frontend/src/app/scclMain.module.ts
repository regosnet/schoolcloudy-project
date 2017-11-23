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
import { APP_BASE_HREF } from '@angular/common';
import { ScclSharedModule } from './scclShared/scclShared.module';



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
    ScclSharedModule.forRoot()
  ],

  bootstrap: [ScclMainComponent],
  providers: [
     { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class ScclMainModule { }
