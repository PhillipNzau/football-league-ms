import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagersComponent } from './managers.component';

const routes: Routes = [{ path: '', component: ManagersComponent }, { path: 'managers-edit', loadChildren: () => import('./managers-edit/managers-edit.module').then(m => m.ManagersEditModule) }, { path: 'managers-view', loadChildren: () => import('./managers-view/managers-view.module').then(m => m.ManagersViewModule) }, { path: 'managers-list', loadChildren: () => import('./managers-list/managers-list.module').then(m => m.ManagersListModule) }, { path: 'managers-add', loadChildren: () => import('./managers-add/managers-add.module').then(m => m.ManagersAddModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagersRoutingModule { }
