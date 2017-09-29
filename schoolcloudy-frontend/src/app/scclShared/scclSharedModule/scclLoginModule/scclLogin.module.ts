import { NgModule } from '@angular/core';
import { ScclLoginComponent } from './scclLogin.component';
import { ScclLoginService } from './scclLogin.service';
import { ScclSharedModule } from '../../scclShared.module';
import { ScclLayoutModule } from '../scclLayoutModule/scclLayout.module';
import { ScclLoginRouting } from './scclLogin.routing';

@NgModule({
    imports: [
              ScclSharedModule.forRoot(),
              ScclLoginRouting,
              ScclLayoutModule
              ],
    exports: [],
    declarations: [
    ScclLoginComponent
  ],
  providers: [ScclLoginService]
})
export class ScclLoginModule {}
