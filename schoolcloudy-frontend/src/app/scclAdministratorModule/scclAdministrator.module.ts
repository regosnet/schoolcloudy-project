import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScclAdministratorComponent } from './scclAdministrator.component';
import { ScclAdministratorRouter } from './scclAdministrator.routing';
import { ScclSharedModule } from '../scclShared/scclShared.module';





@NgModule({
    imports: [
              ScclSharedModule.forRoot(),
       CommonModule,
       ScclAdministratorRouter
    ],
    declarations: [ScclAdministratorComponent],
    providers: []
})
export class ScclAdministratorModule {
}
