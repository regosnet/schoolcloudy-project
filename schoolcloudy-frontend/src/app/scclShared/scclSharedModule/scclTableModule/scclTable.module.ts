import { NgModule } from '@angular/core';
import { ScclSharedModule } from '../../scclShared.module';
import { ScclTableComponent } from './scclTable.component';
import { ScclTableService } from './scclTable.service';
import { DatePipe } from '@angular/common';
import {MatTooltipModule} from '@angular/material';

@NgModule({
  imports: [ScclSharedModule.forRoot(), MatTooltipModule],
  exports: [ScclTableComponent],
  declarations: [ScclTableComponent],
  providers: [ScclTableService, DatePipe]
})
export class ScclTableModule {

}
