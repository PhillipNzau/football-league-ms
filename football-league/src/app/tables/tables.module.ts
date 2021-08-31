import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import {TableListModule} from "./table-list/table-list.module";


@NgModule({
  declarations: [TablesComponent],
    imports: [
        CommonModule,
        TablesRoutingModule,
        TableListModule
    ]
})
export class TablesModule { }
