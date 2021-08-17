import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsViewRoutingModule } from './results-view-routing.module';
import { ResultsViewComponent } from './results-view.component';


@NgModule({
  declarations: [ResultsViewComponent],
  imports: [
    CommonModule,
    ResultsViewRoutingModule
  ]
})
export class ResultsViewModule { }
