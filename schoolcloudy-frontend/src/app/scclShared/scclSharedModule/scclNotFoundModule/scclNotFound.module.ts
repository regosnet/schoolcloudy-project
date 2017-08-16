import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScclNotFoundComponent } from './scclNotFound.component';
import { ScclNotFoundRouter } from './scclNotFoundRouter';


@NgModule({
    imports: [
        ScclNotFoundRouter,
        RouterModule
    ],
    declarations: [ScclNotFoundComponent]
})
export class ScclNotFoundModule {}
