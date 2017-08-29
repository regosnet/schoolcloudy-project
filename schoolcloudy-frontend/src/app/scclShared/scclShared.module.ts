import { NgModule, ModuleWithProviders } from '@angular/core';
import { ScclMenuService } from './scclSharedService/scclMenuService/scclMenuService';
import { ScclPreloaderService } from './scclSharedService/scclPreloaderService/scclPreloader';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../scclTranslatingModule';
import { ScclLoginModule } from './scclSharedModule/scclLoginModule/scclLogin.module';
import { ScclMenuComponent } from './scclSharedModule/scclLayoutModule/scclComponents/scclMenu/scclMenu.component';
import {
    ScclMenuItemComponent
    } from './scclSharedModule/scclLayoutModule/scclComponents/scclMenu/scclMenuComponent/scclMenuItem/scclMenuItem.component';

import {
    ScclTopNavBarComponent
    } from './scclSharedModule/scclLayoutModule/scclComponents/scclHeader/scclTopNavBar/scclTopNavBar.component';
import {
    ScclLeftSidebarComponent
    } from './scclSharedModule/scclLayoutModule/scclComponents/scclAside/scclLeftSideBar/scclLeftSidebar.component';
import { ScclSlimScrollDirective } from './scclDirectives/scclSlimScroll/scclSlimScroll.directive';
import { ScclScrollPositionDirective } from './scclDirectives/scclScrollPosition/scclScrollPosition.directive';
import { TranslateService } from '@ngx-translate/core';
import { ScclPngExtPipe } from './scclPipes/scclPngExt.pipe';
import { SlimScrollModule } from 'ng2-slimscroll';
import { ScclRightSidebarDirective } from './scclDirectives/scclSidebarDirectives/scclRightSidebar.directive';
import {
    ScclRightSidebarComponent
    } from './scclSharedModule/scclLayoutModule/scclComponents/scclAside/scclRightSideBar/scclRightSidebar.component';
import {
    ScclPageContentTopComponent
    } from './scclSharedModule/scclLayoutModule/scclComponents/scclHeader/scclPageContentTop/scclContentTop.component';
import { ScclMsgCenterComponent } from './scclSharedModule/scclLayoutModule/scclComponents/scclMsgCenter/scclMsgCenter.component';


const SCCL_SHARED_SERVICE = [
    ScclMenuService,
    ScclPreloaderService
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
    ScclMsgCenterComponent
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
      SlimScrollModule
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
                      TranslateService
          ],
        };
      }
}
