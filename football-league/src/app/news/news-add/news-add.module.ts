import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsAddRoutingModule } from './news-add-routing.module';
import { NewsAddComponent } from './news-add.component';


@NgModule({
  declarations: [NewsAddComponent],
  imports: [
    CommonModule,
    NewsAddRoutingModule
  ]
})
export class NewsAddModule { }
