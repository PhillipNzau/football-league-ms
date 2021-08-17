import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixturesViewRoutingModule } from './fixtures-view-routing.module';
import { FixturesViewComponent } from './fixtures-view.component';


@NgModule({
  declarations: [FixturesViewComponent],
  imports: [
    CommonModule,
    FixturesViewRoutingModule
  ]
})
export class FixturesViewModule { }
