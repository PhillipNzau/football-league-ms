import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersAddRoutingModule } from './players-add-routing.module';
import { PlayersAddComponent } from './players-add.component';


@NgModule({
  declarations: [PlayersAddComponent],
  imports: [
    CommonModule,
    PlayersAddRoutingModule
  ]
})
export class PlayersAddModule { }
