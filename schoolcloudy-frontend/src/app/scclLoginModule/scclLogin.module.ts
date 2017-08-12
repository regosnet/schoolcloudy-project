import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScclLoginRouting } from './scclLogin.routing';
import { ScclLoginService } from './scclLogin.service';
import { ScclLoginComponent } from './scclLogin.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ScclLoginRouting
  ],
  declarations: [
    ScclLoginComponent
  ],
  providers: [ScclLoginService]
})
export class ScclLoginModule {}
