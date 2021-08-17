import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsAddComponent } from './news-add.component';

const routes: Routes = [{ path: '', component: NewsAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsAddRoutingModule { }
