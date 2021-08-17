import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersAddRoutingModule } from './managers-add-routing.module';
import { ManagersAddComponent } from './managers-add.component';


@NgModule({
  declarations: [ManagersAddComponent],
  imports: [
    CommonModule,
    ManagersAddRoutingModule
  ]
})
export class ManagersAddModule { }
