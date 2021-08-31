import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TeamsComponent} from './teams.component';

const routes: Routes = [
  {
    path: '', component: TeamsComponent, children: [
      {path: '', loadChildren: () => import('./team-list/team-list.module').then(m => m.TeamListModule)},
      {
        path: 'team-information',
        loadChildren: () => import('./team-information/team-information.module').then(m => m.TeamInformationModule)
      },
      {path: 'team-edit', loadChildren: () => import('./team-edit/team-edit.module').then(m => m.TeamEditModule)},
      {path: 'team-add', loadChildren: () => import('./team-add/team-add.module').then(m => m.TeamAddModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule {
}
