import { NgModule } from '@angular/core';
import { AppTranslationModule } from '../../scclTranslatingModule';
import { CommonModule } from '@angular/common';
import { ScclAdminStudentComponent } from './scclAdminStudent.component';
import { ScclAdminStudentRouter } from './scclAdminStudent.router';
import { ScclTableComponent } from '../../scclShared/scclSharedModule/scclTableModule/scclTable.component';
import { ScclTableModule } from '../../scclShared/scclSharedModule/scclTableModule/scclTable.module';
import { ScclTableService } from '../../scclShared/scclSharedModule/scclTableModule/scclTable.service';


@NgModule({
    imports: [ScclAdminStudentRouter, CommonModule, AppTranslationModule, ScclTableModule],
    exports: [],
    declarations: [ScclAdminStudentComponent],
    providers: [ScclTableService]
})
export class ScclAdminStudentModule {
}
