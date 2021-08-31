import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixturesListRoutingModule } from './fixtures-list-routing.module';
import { FixturesListComponent } from './fixtures-list.component';


@NgModule({
    declarations: [FixturesListComponent],
    exports: [
        FixturesListComponent
    ],
    imports: [
        CommonModule,
        FixturesListRoutingModule
    ]
})
export class FixturesListModule { }
