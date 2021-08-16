import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsAddComponent } from './results-add.component';

const routes: Routes = [{ path: '', component: ResultsAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsAddRoutingModule { }
