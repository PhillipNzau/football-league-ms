import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsComponent } from './results.component';

const routes: Routes = [{ path: '', component: ResultsComponent },
  { path: 'results-list', loadChildren: () => import('./results-list/results-list.module').then(m => m.ResultsListModule) },
  { path: 'results-view', loadChildren: () => import('./results-view/results-view.module').then(m => m.ResultsViewModule) },
  { path: 'results-add', loadChildren: () => import('./results-add/results-add.module').then(m => m.ResultsAddModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
