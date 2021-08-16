import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsViewRoutingModule } from './news-view-routing.module';
import { NewsViewComponent } from './news-view.component';


@NgModule({
  declarations: [NewsViewComponent],
  imports: [
    CommonModule,
    NewsViewRoutingModule
  ]
})
export class NewsViewModule { }
