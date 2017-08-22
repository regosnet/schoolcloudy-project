import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScclAdministratorComponent } from './scclAdministrator.component';
import { ScclAdministratorRouter } from './scclAdministrator.routing';
import { ScclSharedModule } from '../scclShared/scclShared.module';
import { AppTranslationModule } from '../scclTranslatingModule';





@NgModule({
    imports: [
              ScclAdministratorRouter,
              ScclSharedModule.forRoot(),
              CommonModule, AppTranslationModule,
    ],
    declarations: [ScclAdministratorComponent],
    providers: []
})
export class ScclAdministratorModule {
}
