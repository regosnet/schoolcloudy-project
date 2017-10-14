import { NgModule } from '@angular/core';
import { ScclAdminStudentComponent } from './scclAdminStudent.component';
import { ScclAdminStudentRouter } from './scclAdminStudent.router';
import { ScclTableComponent } from '../../scclShared/scclSharedModule/scclTableModule/scclTable.component';
import { ScclTableModule } from '../../scclShared/scclSharedModule/scclTableModule/scclTable.module';
import { ScclTableService } from '../../scclShared/scclSharedModule/scclTableModule/scclTable.service';
import { ScclMenuService } from '../../scclShared/scclSharedService/scclMenuService/scclMenuService';
import { ScclSharedModule } from '../../scclShared/scclShared.module';


@NgModule({
    imports: [ScclAdminStudentRouter, ScclTableModule, ScclSharedModule.forRoot()],
    exports: [],
    declarations: [ScclAdminStudentComponent],
    providers: []
})
export class ScclAdminStudentModule {
}
