import { NgModule} from '@angular/core';
import { ScclLayoutComponent } from './scclLayout.component';
import { ScclLoginRouter } from './scclLayoutRouter';
import { AlertModule } from 'ngx-bootstrap';
import { ScclTopNavBarComponent } from './scclComponents/scclHeader/scclTopNavBar/scclTopNavBar.component';

@NgModule({
    imports: [ScclLoginRouter, AlertModule.forRoot()],
    declarations: [ScclLayoutComponent, ScclTopNavBarComponent]
})
export class ScclLayoutModule {}
