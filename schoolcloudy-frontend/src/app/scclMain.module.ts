import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScclMainComponent } from './scclMain.component';
import { ScclGlobalState } from './scclGlobalState';
import { ScclSharedModule } from './scclShared/scclShared.module';
import { ScclAdministratorComponent } from './scclAdministratorModule/scclAdministrator.component';
import { ScclMainRouter } from './scclMain.router';
import { ScclAdministratorModule } from './scclAdministratorModule/scclAdministrator.module';
import { ScclLayoutModule } from './scclShared/scclSharedModule/scclLayoutModule/scclLayout.module';







@NgModule({
  declarations: [
    ScclMainComponent
  ],
  imports: [
    BrowserModule,
    ScclMainRouter,
    ScclSharedModule.forRoot(),
    ScclAdministratorModule
  ],
  providers: [ScclGlobalState],
  bootstrap: [ScclMainComponent]
})
export class ScclMainModule { }
