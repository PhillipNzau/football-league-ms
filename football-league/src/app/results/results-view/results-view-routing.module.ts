import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsViewComponent } from './results-view.component';

const routes: Routes = [{ path: '', component: ResultsViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsViewRoutingModule { }
