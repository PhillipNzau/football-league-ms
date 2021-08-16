import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';

const routes: Routes = [{ path: '', component: NewsComponent }, { path: 'news-view', loadChildren: () => import('./news-view/news-view.module').then(m => m.NewsViewModule) }, { path: 'news-list', loadChildren: () => import('./news-list/news-list.module').then(m => m.NewsListModule) }, { path: 'news-add', loadChildren: () => import('./news-add/news-add.module').then(m => m.NewsAddModule) }, { path: 'news-edit', loadChildren: () => import('./news-edit/news-edit.module').then(m => m.NewsEditModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
