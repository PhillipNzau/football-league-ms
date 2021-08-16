import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersViewRoutingModule } from './managers-view-routing.module';
import { ManagersViewComponent } from './managers-view.component';


@NgModule({
  declarations: [ManagersViewComponent],
  imports: [
    CommonModule,
    ManagersViewRoutingModule
  ]
})
export class ManagersViewModule { }
