import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersViewRoutingModule } from './players-view-routing.module';
import { PlayersViewComponent } from './players-view.component';


@NgModule({
  declarations: [PlayersViewComponent],
  imports: [
    CommonModule,
    PlayersViewRoutingModule
  ]
})
export class PlayersViewModule { }
