import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableEditRoutingModule } from './table-edit-routing.module';
import { TableEditComponent } from './table-edit.component';


@NgModule({
  declarations: [TableEditComponent],
  imports: [
    CommonModule,
    TableEditRoutingModule
  ]
})
export class TableEditModule { }
