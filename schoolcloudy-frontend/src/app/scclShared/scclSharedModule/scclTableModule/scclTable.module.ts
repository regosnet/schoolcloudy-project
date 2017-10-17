import { NgModule } from '@angular/core';
import { ScclSharedModule } from '../../scclShared.module';
import { ScclTableComponent } from './scclTable.component';
import { ScclTableService } from './scclTable.service';
import { DatePipe } from '@angular/common';
import { ScclSubTableComponent } from './scclSubTable/scclSubTable.component';


@NgModule({
  imports: [ScclSharedModule.forRoot()],
  exports: [ScclTableComponent],
  declarations: [ScclTableComponent, ScclSubTableComponent],
  providers: [ScclTableService, DatePipe],
  entryComponents: [ScclSubTableComponent]
})
export class ScclTableModule {

}
