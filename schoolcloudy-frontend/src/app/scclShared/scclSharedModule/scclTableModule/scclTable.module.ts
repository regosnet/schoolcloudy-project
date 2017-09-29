import { NgModule } from '@angular/core';
import { ScclSharedModule } from '../../scclShared.module';
import { ScclTableComponent } from './scclTable.component';

@NgModule({
  imports: [ScclSharedModule.forRoot()],
  exports: [ScclTableComponent],
  declarations: [ScclTableComponent]
})
export class ScclTableModule {

}
