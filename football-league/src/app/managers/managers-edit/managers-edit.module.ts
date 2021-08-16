import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersEditRoutingModule } from './managers-edit-routing.module';
import { ManagersEditComponent } from './managers-edit.component';


@NgModule({
  declarations: [ManagersEditComponent],
  imports: [
    CommonModule,
    ManagersEditRoutingModule
  ]
})
export class ManagersEditModule { }
