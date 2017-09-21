import { NgModule, ModuleWithProviders } from '@angular/core';
import { ScclMenuService } from './scclSharedService/scclMenuService/scclMenuService';
import { ScclPreloaderService } from './scclSharedService/scclPreloaderService/scclPreloader';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../scclTranslatingModule';
import { ScclLoginModule } from './scclSharedModule/scclLoginModule/scclLogin.module';
import { ScclSlimScrollDirective } from './scclDirectives/scclSlimScroll/scclSlimScroll.directive';
import { ScclScrollPositionDirective } from './scclDirectives/scclScrollPosition/scclScrollPosition.directive';
import { TranslateService } from '@ngx-translate/core';
import { ScclPngExtPipe } from './scclPipes/scclPngExt.pipe';
import { ScclRightSidebarDirective } from './scclDirectives/scclSidebarDirectives/scclRightSidebar.directive';
import { ScclMsgCenterService } from './scclSharedModule/scclLayoutModule/scclOuterLayout/scclMsgCenter/scclMsgCenter.service';
import {
    ScclTopNavBarComponent
    } from './scclSharedModule/scclLayoutModule/scclOuterLayout/scclHeader/scclTopNavBar/scclTopNavBar.component';
import {
    ScclMenuItemComponent
    } from './scclSharedModule/scclLayoutModule/scclOuterLayout/scclMenu/scclMenuComponent/scclMenuItem/scclMenuItem.component';
import {
    ScclMenuComponent
    } from './scclSharedModule/scclLayoutModule/scclOuterLayout/scclMenu/scclMenu.component';
import {
    ScclLeftSidebarComponent
    } from './scclSharedModule/scclLayoutModule/scclOuterLayout/scclAside/scclLeftSideBar/scclLeftSidebar.component';
import {
    ScclRightSidebarComponent
    } from './scclSharedModule/scclLayoutModule/scclOuterLayout/scclAside/scclRightSideBar/scclRightSidebar.component';
import {
    ScclPageContentTopComponent
    } from './scclSharedModule/scclLayoutModule/scclOuterLayout/scclHeader/scclPageContentTop/scclContentTop.component';
import { ScclMsgCenterComponent } from './scclSharedModule/scclLayoutModule/scclOuterLayout/scclMsgCenter/scclMsgCenter.component';
import {
    ScclDropDownMenuComponent
    } from './scclSharedModule/scclLayoutModule/scclOuterLayout/scclHeader/scclTopNavBar/scclDropDownMenu/scclDropDownMenu';
import {
    ScclAdminDashboardAsideComponent
    } from './scclSharedModule/scclLayoutModule/scclInnerLayout/scclInnerAside/scclInnerAside.component';
    import {DndModule} from 'ng2-dnd';
import { ScclLayoutComponent } from './scclSharedModule/scclLayoutModule/scclLayout.component';


const SCCL_SHARED_SERVICE = [
    ScclMenuService,
    ScclPreloaderService,
    ScclMsgCenterService
];

const SCCL_DIRECTIVES = [
    ScclScrollPositionDirective,
    ScclSlimScrollDirective,
    ScclRightSidebarDirective
];

const SCCL_COMPONENTS = [
    ScclTopNavBarComponent,
    ScclMenuItemComponent,
    ScclMenuComponent,
    ScclLeftSidebarComponent,
    ScclRightSidebarComponent,
    ScclPageContentTopComponent,
    ScclMsgCenterComponent,
    ScclDropDownMenuComponent,
    ScclAdminDashboardAsideComponent,
    ScclLayoutComponent
];

const SCCL_PIPES = [
    ScclPngExtPipe
];

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule,
      AppTranslationModule,
      DndModule.forRoot()
    ],
    declarations: [
      ...SCCL_PIPES,
      ...SCCL_DIRECTIVES,
      ...SCCL_COMPONENTS
    ],
    providers: [
        ...SCCL_SHARED_SERVICE
    ],
    exports: [
         ...SCCL_PIPES,
         ...SCCL_DIRECTIVES,
         ...SCCL_COMPONENTS
    ]
})
export class ScclSharedModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
          ngModule: ScclSharedModule,
          providers: [
                      TranslateService,
                      SCCL_SHARED_SERVICE
          ],
        };
      }
}
