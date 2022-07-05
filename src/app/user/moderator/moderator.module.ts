import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeratorRoutingModule } from './moderator-routing.module';
import { ModeratorComponent } from './moderator.component';


@NgModule({
  declarations: [
    ModeratorComponent
  ],
  imports: [
    CommonModule,
    ModeratorRoutingModule
  ]
})
export class ModeratorModule { }
