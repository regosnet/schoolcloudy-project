import { NgModule } from '@angular/core';
import { AppTranslationModule } from '../../scclTranslatingModule';
import { CommonModule } from '@angular/common';
import { ScclAdminStudentComponent } from './scclAdminStudent.component';
import { ScclAdminStudentRouter } from './scclAdminStudent.router';
import { ScclTableComponent } from '../../scclShared/scclSharedModule/scclTableModule/scclTable.component';
import { ScclTableModule } from '../../scclShared/scclSharedModule/scclTableModule/scclTable.module';


@NgModule({
    imports: [ScclAdminStudentRouter, CommonModule, AppTranslationModule, ScclTableModule],
    exports: [],
    declarations: [ScclAdminStudentComponent]
})
export class ScclAdminStudentModule {
}
