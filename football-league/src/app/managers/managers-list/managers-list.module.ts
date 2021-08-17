import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersListRoutingModule } from './managers-list-routing.module';
import { ManagersListComponent } from './managers-list.component';


@NgModule({
  declarations: [ManagersListComponent],
  imports: [
    CommonModule,
    ManagersListRoutingModule
  ]
})
export class ManagersListModule { }
