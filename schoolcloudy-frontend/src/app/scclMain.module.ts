import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScclMainComponent } from './scclMain.component';
import { ScclMainRouting } from './scclMain.routing';



@NgModule({
  declarations: [
    ScclMainComponent
  ],
  imports: [
    BrowserModule,
    ScclMainRouting
  ],
  providers: [],
  bootstrap: [ScclMainComponent]
})
export class ScclMainModule { }
