import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';

const routes: Routes = [
  { path: '', component: TablesComponent, children: [
      { path: '', loadChildren: () => import('./table-list/table-list.module').then(m => m.TableListModule) },
      { path: 'table-edit', loadChildren: () => import('./table-edit/table-edit.module').then(m => m.TableEditModule) }
    ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
