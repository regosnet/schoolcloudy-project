import { NgModule } from '@angular/core';
import { ScclAdminDashboardComponent } from './scclAdminDashboard.component';
import { ScclAdminDashboardRouter } from './scclAdminDashboard.router';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../scclTranslatingModule';
import { ScclSharedModule } from '../../scclShared/scclShared.module';
import {DndModule} from 'ng2-dnd';


@NgModule({
    imports: [ScclAdminDashboardRouter,
              ScclSharedModule.forRoot(),
              CommonModule,
              AppTranslationModule,
              DndModule.forRoot()
              ],
    exports: [DndModule],
    declarations: [ScclAdminDashboardComponent]
})
export class ScclAdminDashboardModule {
}
