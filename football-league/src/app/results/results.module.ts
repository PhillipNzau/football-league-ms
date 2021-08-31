import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import {ResultsListModule} from "./results-list/results-list.module";


@NgModule({
  declarations: [ResultsComponent],
    imports: [
        CommonModule,
        ResultsRoutingModule,
        ResultsListModule
    ]
})
export class ResultsModule { }
