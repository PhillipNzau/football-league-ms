import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagersAddComponent } from './managers-add.component';

const routes: Routes = [{ path: '', component: ManagersAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagersAddRoutingModule { }
