import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagersEditComponent } from './managers-edit.component';

const routes: Routes = [{ path: '', component: ManagersEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagersEditRoutingModule { }
