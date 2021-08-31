import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ResultsListModule} from "../results/results-list/results-list.module";
import {FixturesListModule} from "../fixtures/fixtures-list/fixtures-list.module";
import {TableListModule} from "../tables/table-list/table-list.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ResultsListModule,
    FixturesListModule,
    TableListModule
  ]
})
export class HomeModule { }
