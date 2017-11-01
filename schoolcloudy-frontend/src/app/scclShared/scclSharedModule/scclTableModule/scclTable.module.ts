import { NgModule } from '@angular/core';
import { ScclSharedModule } from '../../scclShared.module';
import { ScclTableComponent } from './scclTable.component';
import { ScclTableService } from './scclTable.service';
import { DatePipe } from '@angular/common';
import { ScclSubTableComponent } from './scclSubTable/scclSubTable.component';
import { ScclTableModalComponent } from './scclTableModal/scclTableModal.component';
import {SelectModule} from 'ng2-select';


@NgModule({
  imports: [ScclSharedModule.forRoot(), SelectModule],
  exports: [ScclTableComponent],
  declarations: [ScclTableComponent, ScclSubTableComponent, ScclTableModalComponent],
  providers: [ScclTableService, DatePipe],
  entryComponents: [ScclSubTableComponent]
})
export class ScclTableModule {

}
