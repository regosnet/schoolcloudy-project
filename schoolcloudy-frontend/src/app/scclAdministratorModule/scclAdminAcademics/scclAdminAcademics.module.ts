import { NgModule } from '@angular/core';
import { ScclAdminAcademicsRouter } from './scclAdminAcademics.router';
import { ScclAdminAcademicsComponent } from './scclAdminAcademics.component';
import { AppTranslationModule } from '../../scclTranslatingModule';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [ScclAdminAcademicsRouter, CommonModule , AppTranslationModule],
    exports: [],
    declarations: [ScclAdminAcademicsComponent]
})
export class ScclAdminAcademicsModule {
}
