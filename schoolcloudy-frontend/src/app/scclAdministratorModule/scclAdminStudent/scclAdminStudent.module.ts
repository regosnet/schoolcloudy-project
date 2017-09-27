import { NgModule } from '@angular/core';
import { AppTranslationModule } from '../../scclTranslatingModule';
import { CommonModule } from '@angular/common';
import { ScclAdminStudentComponent } from './scclAdminStudent.component';
import { ScclAdminStudentRouter } from './scclAdminStudent.router';
import { ScclTableComponent } from '../../scclShared/scclSharedModule/scclTableModule/scclTable.component';


@NgModule({
    imports: [ScclAdminStudentRouter, CommonModule, AppTranslationModule],
    exports: [],
    declarations: [ScclAdminStudentComponent, ScclTableComponent]
})
export class ScclAdminStudentModule {
}
