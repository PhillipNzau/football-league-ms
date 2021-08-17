import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixturesListComponent } from './fixtures-list.component';

const routes: Routes = [{ path: '', component: FixturesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixturesListRoutingModule { }
