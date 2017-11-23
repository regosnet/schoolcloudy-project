import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../scclTranslatingModule';

//Modules from https://material.angular.io/
import {
    MatTooltipModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatInputModule
    } from '@angular/material';

import {
    NbActionsModule,
    NbCardModule,
    NbLayoutModule,
    NbMenuModule,
    NbRouteTabsetModule,
    NbSearchModule,
    NbSidebarModule,
    NbTabsetModule,
    NbThemeModule,
    NbUserModule,
    NbCheckboxModule,
  } from '@nebular/theme';



import {DndModule} from 'ng2-dnd';
import 'hammerjs';
import { ScclPngExtPipe} from './scclPipes/scclPngExt.pipe';

import { ScclMsgCenterService } from './scclSharedModule/scclLayoutModule/scclOuterLayout/scclMsgCenter/scclMsgCenter.service';
import { ScclMenuService, ScclPreloaderService } from './scclSharedService';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalState } from '../scclGlobalState';
import {
         ScclButtonComponent,
         ScclSearchBarComponent
        } from './scclComponents';

import {
    ScclMenuItemDirective,
    ScclRightSidebarDirective,
    ScclScrollPositionDirective,
    ScclSlimScrollDirective,
    ScclTableDirective,
    ScclLayoutDirective
    } from './scclDirectives';

import { DEFAULT_THEME } from '../@theme/styles/theme.default';
import { COSMIC_THEME } from '../@theme/styles/theme.cosmic';

const NB_MODULES = [
    NbCardModule,
    NbLayoutModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbCheckboxModule
    ];

const MAT_MODULES = [
    MatTooltipModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatInputModule
                    ];

const SCCL_SHARED_SERVICE = [
    ScclMenuService,
    ScclPreloaderService,
    ScclMsgCenterService,
    ScclGlobalState,
    ...NbSidebarModule.forRoot().providers,
    ...NbMenuModule.forRoot().providers,
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
    ScclButtonComponent,
    ScclSearchBarComponent
];

const SCCL_PIPES = [
    ScclPngExtPipe
];

const NB_THEME_PROVIDERS = [
    ...NbThemeModule.forRoot(
      {
        name: 'cosmic',
      },
      [ DEFAULT_THEME, COSMIC_THEME ],
    ).providers,
    ...NbSidebarModule.forRoot().providers,
    ...NbMenuModule.forRoot().providers,
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
      ...MAT_MODULES,
      ...NB_MODULES
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
         ...NB_MODULES,
         DndModule,
         RouterModule,
         AppTranslationModule,
         CommonModule,
         ReactiveFormsModule,
         FormsModule,
         ...MAT_MODULES
    ]
})
export class ScclSharedModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
          ngModule: ScclSharedModule,
          providers: [
               TranslateService,
               SCCL_SHARED_SERVICE,
               ...NB_THEME_PROVIDERS
          ],
        };
      }
}
