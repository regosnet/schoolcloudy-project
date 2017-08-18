import { NgModule} from '@angular/core';
import { ScclLayoutComponent } from './scclLayout.component';
import { ScclLayoutRouter } from './scclLayoutRouter';
import { ScclSharedModule } from '../../scclShared.module';
import { CommonModule } from '@angular/common';
import { ScclTopNavBarComponent } from './scclComponents/scclHeader/scclTopNavBar/scclTopNavBar.component';
import { ScclMenuItemComponent } from './scclComponents/scclMenu/scclMenuComponent/scclMenuItem/scclMenuItem.component';
import { ScclMenuComponent } from './scclComponents/scclMenu/scclMenu.component';
import { ScclLeftSidebarComponent } from './scclComponents/scclAside/scclLeftSideBar/scclLeftSidebar.component';
import { ScclScrollPositionDirective } from '../../scclDirectives/scclScrollPosition/scclScrollPosition.directive';
import { ScclSlimScrollDirective } from '../../scclDirectives/scclSlimScroll/scclSlimScroll.directive';



@NgModule({
    imports: [ScclSharedModule.forRoot(), ScclLayoutRouter, CommonModule],
    declarations:
        [
         ScclLayoutComponent,
         ]
})
export class ScclLayoutModule {}
