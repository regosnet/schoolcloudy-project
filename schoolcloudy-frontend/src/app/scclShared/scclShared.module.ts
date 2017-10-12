import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../scclTranslatingModule';
import {DndModule} from 'ng2-dnd';

import { ScclSlimScrollDirective } from './scclDirectives/scclSlimScroll/scclSlimScroll.directive';
import { ScclScrollPositionDirective } from './scclDirectives/scclScrollPosition/scclScrollPosition.directive';
import { ScclRightSidebarDirective } from './scclDirectives/scclSidebarDirectives/scclRightSidebar.directive';
import { ScclPngExtPipe, ScclObjectPipe, ScclItemKey } from './scclPipes/scclPngExt.pipe';

import { ScclMsgCenterService } from './scclSharedModule/scclLayoutModule/scclOuterLayout/scclMsgCenter/scclMsgCenter.service';
import { ScclMenuService } from './scclSharedService/scclMenuService/scclMenuService';
import { ScclPreloaderService } from './scclSharedService/scclPreloaderService/scclPreloader';
import { TranslateService } from '@ngx-translate/core';
import { ScclLayoutDirective } from './scclDirectives/scclLayoutDirectives/scclLayout.directive';
import { ScclTableDirective } from './scclDirectives/scclTableDirectives/scclTable.directive';



const SCCL_SHARED_SERVICE = [
    ScclMenuService,
    ScclPreloaderService,
    ScclMsgCenterService
];

const SCCL_DIRECTIVES = [
    ScclScrollPositionDirective,
    ScclRightSidebarDirective,
    ScclSlimScrollDirective,
    ScclLayoutDirective,
    ScclTableDirective
];

const SCCL_COMPONENTS = [
];

const SCCL_PIPES = [
    ScclPngExtPipe,
    ScclObjectPipe,
    ScclItemKey
];

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule,
      AppTranslationModule,
      DndModule.forRoot(),
      ReactiveFormsModule,
      FormsModule,
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
         ...SCCL_COMPONENTS,
         DndModule,
         RouterModule,
         AppTranslationModule,
         CommonModule,
         ReactiveFormsModule,
         FormsModule,
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
