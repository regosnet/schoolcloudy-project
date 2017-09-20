import { NgModule } from '@angular/core';
import { ScclAdminAcademicsRouter } from './scclAdminAcademics.router';
import { ScclAdminAcademicsComponent } from './scclAdminAcademics.component';
import { AppTranslationModule } from '../../scclTranslatingModule';
import { CommonModule } from '@angular/common';
import { ScclProgrammesComponent } from './scclProgrammes/scclProgrammes.component';
import { ScclCoursesComponent } from './scclCourses/scclCourses.component';
import { ScclFacultiesComponent } from './scclFaculties/scclFaculties.component';
import { ScclTimetablesComponent } from './scclTimetables/scclTimetables.component';
import { ScclDepartmentsComponent } from './scclDepartments/scclDepartments.component';


@NgModule({
    imports: [ScclAdminAcademicsRouter, CommonModule , AppTranslationModule],
    exports: [],
    declarations: [ScclAdminAcademicsComponent, ScclProgrammesComponent,
                   ScclCoursesComponent, ScclFacultiesComponent,
                   ScclTimetablesComponent, ScclDepartmentsComponent]
})
export class ScclAdminAcademicsModule {
}
