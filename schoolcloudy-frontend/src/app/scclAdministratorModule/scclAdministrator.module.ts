import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScclAdministratorComponent } from './scclAdministrator.component';
import { ScclAdministratorRouter } from './scclAdministrator.routing';
import { ScclSharedModule } from '../scclShared/scclShared.module';
import { AppTranslationModule } from '../scclTranslatingModule';
import { ScclAdmininstratorService } from './scclAdministrator.service';
import { ScclLayoutComponent } from '../scclShared/scclSharedModule/scclLayoutModule/scclLayout.component';
import { ScclLayoutModule } from '../scclShared/scclSharedModule/scclLayoutModule/scclLayout.module';


@NgModule({
    imports: [ScclLayoutModule, ScclAdministratorRouter],
    declarations: [ScclAdministratorComponent],
    exports: [ScclAdministratorComponent],
    providers: [ScclAdmininstratorService]
})
export class ScclAdministratorModule {
}
