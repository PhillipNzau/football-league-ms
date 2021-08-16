import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersViewComponent } from './players-view.component';

const routes: Routes = [{ path: '', component: PlayersViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersViewRoutingModule { }
