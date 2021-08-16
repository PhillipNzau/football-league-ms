import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamAddRoutingModule } from './team-add-routing.module';
import { TeamAddComponent } from './team-add.component';


@NgModule({
  declarations: [TeamAddComponent],
  imports: [
    CommonModule,
    TeamAddRoutingModule
  ]
})
export class TeamAddModule { }
