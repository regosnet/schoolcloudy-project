import { NgModule } from '@angular/core';
import { AppTranslationModule } from '../../scclTranslatingModule';
import { CommonModule } from '@angular/common';
import { ScclAdminMailboxComponent } from './scclAdminMailbox.component';
import { ScclAdminMailboxRouter } from './scclAdminMailbox.router';



@NgModule({
    imports: [CommonModule, AppTranslationModule, ScclAdminMailboxRouter],
    exports: [],
    declarations: [ScclAdminMailboxComponent]
})
export class ScclAdminMailboxModule {
}
