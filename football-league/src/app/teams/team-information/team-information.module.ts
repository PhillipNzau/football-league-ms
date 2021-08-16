import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamInformationRoutingModule } from './team-information-routing.module';
import { TeamInformationComponent } from './team-information.component';


@NgModule({
  declarations: [TeamInformationComponent],
  imports: [
    CommonModule,
    TeamInformationRoutingModule
  ]
})
export class TeamInformationModule { }
