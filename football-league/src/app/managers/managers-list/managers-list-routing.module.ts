import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagersListComponent } from './managers-list.component';

const routes: Routes = [{ path: '', component: ManagersListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagersListRoutingModule { }
