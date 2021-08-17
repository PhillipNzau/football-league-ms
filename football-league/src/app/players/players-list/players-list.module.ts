import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersListRoutingModule } from './players-list-routing.module';
import { PlayersListComponent } from './players-list.component';


@NgModule({
  declarations: [PlayersListComponent],
  imports: [
    CommonModule,
    PlayersListRoutingModule
  ]
})
export class PlayersListModule { }
