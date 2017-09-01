import { NgModule } from '@angular/core';
import { AppTranslationModule } from '../../scclTranslatingModule';
import { CommonModule } from '@angular/common';
import { ScclAdminStudentComponent } from './scclAdminStudent.component';
import { ScclAdminStudentRouter } from './scclAdminStudent.router';


@NgModule({
    imports: [ScclAdminStudentRouter, CommonModule, AppTranslationModule],
    exports: [],
    declarations: [ScclAdminStudentComponent]
})
export class ScclAdminStudentModule {
}
