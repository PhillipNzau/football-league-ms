import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players.component';

const routes: Routes = [{ path: '', component: PlayersComponent }, { path: 'players-list', loadChildren: () => import('./players-list/players-list.module').then(m => m.PlayersListModule) }, { path: 'players-view', loadChildren: () => import('./players-view/players-view.module').then(m => m.PlayersViewModule) }, { path: 'players-edit', loadChildren: () => import('./players-edit/players-edit.module').then(m => m.PlayersEditModule) }, { path: 'players-add', loadChildren: () => import('./players-add/players-add.module').then(m => m.PlayersAddModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
