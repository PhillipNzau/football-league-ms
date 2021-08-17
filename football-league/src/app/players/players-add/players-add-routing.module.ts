import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersAddComponent } from './players-add.component';

const routes: Routes = [{ path: '', component: PlayersAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersAddRoutingModule { }
