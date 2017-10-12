import { NgModule, ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../../scclTranslatingModule';
import { ScclSharedModule } from '../../scclShared.module';
import { ScclLayoutComponent } from './scclLayout.component';
import {
    ScclLeftSidebarComponent,
    ScclMenuComponent,
    ScclMenuItemComponent,
    ScclRightSidebarComponent,
    ScclDropDownMenuComponent,
    ScclMsgCenterComponent,
    ScclMsgCenterMenuItemComponent,
    ScclPageContentTopComponent,
    ScclTopNavBarComponent
    } from './scclOuterLayout';
import {ScclAdminDashboardAsideComponent} from './scclInnerLayout';
import { ScclLayoutService } from './scclLayout.service';



const SCCL_LAYOUT_COMPONENTS =
    [
         ScclLeftSidebarComponent,
         ScclMenuComponent,
         ScclMenuItemComponent,
         ScclRightSidebarComponent,
         ScclDropDownMenuComponent,
         ScclMsgCenterComponent,
         ScclMsgCenterMenuItemComponent,
         ScclPageContentTopComponent,
         ScclTopNavBarComponent,
         ScclAdminDashboardAsideComponent
     ];


@NgModule({
    imports: [ScclSharedModule.forRoot()],
    declarations: [
                   ...SCCL_LAYOUT_COMPONENTS,
                   ScclLayoutComponent],
    exports: [ScclLayoutComponent, ScclSharedModule],

    providers: [ScclLayoutService]
})
export class ScclLayoutModule {}
