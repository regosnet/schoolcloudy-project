import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScclMainComponent } from './scclMain.component';
import { ScclMainRouting } from './scclMain.routing';
import { ScclPreloaderService } from './scclService/scclPreloaderService/scclPreloader';



@NgModule({
  declarations: [
    ScclMainComponent
  ],
  imports: [
    BrowserModule,
    ScclMainRouting
  ],
  providers: [ScclPreloaderService],
  bootstrap: [ScclMainComponent]
})
export class ScclMainModule { }
