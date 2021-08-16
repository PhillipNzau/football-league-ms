import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsAddRoutingModule } from './results-add-routing.module';
import { ResultsAddComponent } from './results-add.component';


@NgModule({
  declarations: [ResultsAddComponent],
  imports: [
    CommonModule,
    ResultsAddRoutingModule
  ]
})
export class ResultsAddModule { }
