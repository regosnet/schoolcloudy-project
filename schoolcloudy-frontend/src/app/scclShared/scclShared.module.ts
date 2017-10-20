import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../scclTranslatingModule';

//Modules from https://material.angular.io/
import {MatTooltipModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';


import {DndModule} from 'ng2-dnd';
import 'hammerjs';
import { ScclPngExtPipe, ScclObjectPipe, ScclItemKey } from './scclPipes/scclPngExt.pipe';

import { ScclMsgCenterService } from './scclSharedModule/scclLayoutModule/scclOuterLayout/scclMsgCenter/scclMsgCenter.service';
import { ScclMenuService, ScclPreloaderService } from './scclSharedService';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalState } from '../scclGlobalState';
import {
    ScclMenuItemDirective,
    ScclRightSidebarDirective,
    ScclScrollPositionDirective,
    ScclSlimScrollDirective,
    ScclTableDirective,
    ScclLayoutDirective} from './scclDirectives';



const SCCL_SHARED_SERVICE = [
    ScclMenuService,
    ScclPreloaderService,
    ScclMsgCenterService,
    ScclGlobalState
];

const SCCL_DIRECTIVES = [
    ScclScrollPositionDirective,
    ScclRightSidebarDirective,
    ScclSlimScrollDirective,
    ScclLayoutDirective,
    ScclTableDirective,
    ScclMenuItemDirective
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
      MatTooltipModule,
      MatTabsModule,
      MatCardModule,
      MatMenuModule,
      MatIconModule
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
         MatTooltipModule,
         MatTabsModule,
         MatCardModule,
         MatMenuModule,
         MatIconModule
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
