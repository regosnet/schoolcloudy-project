import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScclAdminAcademicsComponent } from './scclAdminAcademics.component';
import { ScclProgrammesComponent } from './scclProgrammes/scclProgrammes.component';
import { ScclCoursesComponent } from './scclCourses/scclCourses.component';
import { ScclFacultiesComponent } from './scclFaculties/scclFaculties.component';
import { ScclTimetablesComponent } from './scclTimetables/scclTimetables.component';
import { ScclDepartmentsComponent } from './scclDepartments/scclDepartments.component';


// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ScclAdminAcademicsComponent,
    children:
        [
             {path: 'programmes', component: ScclProgrammesComponent},
             {path: 'courses', component: ScclCoursesComponent},
             {path: 'faculties', component: ScclFacultiesComponent},
             {path: 'timetables', component: ScclTimetablesComponent},
             {path: 'departments', component: ScclDepartmentsComponent}
         ]
  }
];

export const ScclAdminAcademicsRouter: ModuleWithProviders = RouterModule.forChild(routes);
