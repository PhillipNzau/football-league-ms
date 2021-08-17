import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsEditRoutingModule } from './news-edit-routing.module';
import { NewsEditComponent } from './news-edit.component';


@NgModule({
  declarations: [NewsEditComponent],
  imports: [
    CommonModule,
    NewsEditRoutingModule
  ]
})
export class NewsEditModule { }
