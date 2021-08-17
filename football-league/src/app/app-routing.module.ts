import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'results', loadChildren: () => import('./results/results.module').then(m => m.ResultsModule) },
  { path: 'fixtures', loadChildren: () => import('./fixtures/fixtures.module').then(m => m.FixturesModule) },
  { path: 'players', loadChildren: () => import('./players/players.module').then(m => m.PlayersModule) },
  { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  { path: 'managers', loadChildren: () => import('./managers/managers.module').then(m => m.ManagersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
