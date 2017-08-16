import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScclMainComponent } from './scclMain.component';
import { ScclMainRouting } from './scclMain.routing';
import { ScclGlobalState } from './scclGlobalState';
import { ScclSharedModule } from './scclShared/scclShared.module';







@NgModule({
  declarations: [
    ScclMainComponent
  ],
  imports: [
    BrowserModule,
    ScclSharedModule,
    ScclMainRouting
  ],
  providers: [ScclGlobalState],
  bootstrap: [ScclMainComponent]
})
export class ScclMainModule { }
