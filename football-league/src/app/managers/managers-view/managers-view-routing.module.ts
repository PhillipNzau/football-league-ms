import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagersViewComponent } from './managers-view.component';

const routes: Routes = [{ path: '', component: ManagersViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagersViewRoutingModule { }
