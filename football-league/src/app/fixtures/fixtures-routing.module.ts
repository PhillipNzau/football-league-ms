import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FixturesComponent} from './fixtures.component';

const routes: Routes = [
  {
    path: '', component: FixturesComponent, children: [
      {
        path: '',
        loadChildren: () => import('./fixtures-list/fixtures-list.module').then(m => m.FixturesListModule)
      },
      {
        path: 'fixtures-view',
        loadChildren: () => import('./fixtures-view/fixtures-view.module').then(m => m.FixturesViewModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixturesRoutingModule {
}
