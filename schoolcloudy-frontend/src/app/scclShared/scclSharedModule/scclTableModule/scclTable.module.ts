import { NgModule } from '@angular/core';
import { ScclSharedModule } from '../../scclShared.module';
import { ScclTableComponent } from './scclTable.component';
import { ScclTableService } from './scclTable.service';

@NgModule({
  imports: [ScclSharedModule.forRoot()],
  exports: [ScclTableComponent],
  declarations: [ScclTableComponent],
  providers: [ScclTableService]
})
export class ScclTableModule {

}
