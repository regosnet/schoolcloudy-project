import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../../scclTranslatingModule';
import { ScclSharedModule } from '../../scclShared.module';
import { ScclLayoutComponent } from './scclLayout.component';



@NgModule({
    imports: [],
    declarations: [ScclLayoutComponent]
})
export class ScclLayoutModule {}
