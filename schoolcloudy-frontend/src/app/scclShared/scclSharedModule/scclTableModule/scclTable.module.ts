import { NgModule } from '@angular/core';
import { ScclSharedModule } from '../../scclShared.module';
import { ScclTableComponent } from './scclTable.component';
import { ScclTableService } from './scclTable.service';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [ScclSharedModule.forRoot()],
  exports: [ScclTableComponent],
  declarations: [ScclTableComponent],
  providers: [ScclTableService, DatePipe]
})
export class ScclTableModule {

}
