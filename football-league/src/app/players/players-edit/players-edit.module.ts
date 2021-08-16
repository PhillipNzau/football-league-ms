import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersEditRoutingModule } from './players-edit-routing.module';
import { PlayersEditComponent } from './players-edit.component';


@NgModule({
  declarations: [PlayersEditComponent],
  imports: [
    CommonModule,
    PlayersEditRoutingModule
  ]
})
export class PlayersEditModule { }
