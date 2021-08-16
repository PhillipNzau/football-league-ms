import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersEditComponent } from './players-edit.component';

const routes: Routes = [{ path: '', component: PlayersEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersEditRoutingModule { }
