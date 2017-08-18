import { NgModule, ModuleWithProviders } from '@angular/core';
import { ScclMenuService } from './scclSharedService/scclMenuService/scclMenuService';
import { ScclPreloaderService } from './scclSharedService/scclPreloaderService/scclPreloader';
import { ScclProfilePhotoPipe } from './scclPipes/scclProfilePhoto.pipe';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScclLayoutModule } from './scclSharedModule/scclLayoutModule/scclLayout.module';
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

const SCCL_SHARED_SERVICE = [
    ScclMenuService,
    ScclPreloaderService
];

const SCCL_DIRECTIVES = [
    ScclScrollPositionDirective,
    ScclSlimScrollDirective
];

const SCCL_COMPONENTS = [
    ScclTopNavBarComponent,
    ScclMenuItemComponent,
    ScclMenuComponent,
    ScclLeftSidebarComponent
];

const SCCL_PIPES = [
    ScclProfilePhotoPipe
];

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule,
      AppTranslationModule,
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
          ],
        };
      }
}
