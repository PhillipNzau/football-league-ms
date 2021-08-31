import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableListRoutingModule } from './table-list-routing.module';
import { TableListComponent } from './table-list.component';


@NgModule({
    declarations: [TableListComponent],
    exports: [
        TableListComponent
    ],
    imports: [
        CommonModule,
        TableListRoutingModule
    ]
})
export class TableListModule { }
