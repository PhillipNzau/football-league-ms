import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamEditRoutingModule } from './team-edit-routing.module';
import { TeamEditComponent } from './team-edit.component';


@NgModule({
  declarations: [TeamEditComponent],
  imports: [
    CommonModule,
    TeamEditRoutingModule
  ]
})
export class TeamEditModule { }
