import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticRoutingModule } from './statistic-routing.module';
import { StatisticComponent } from './statistic/statistic.component';
import {NgChartsModule} from "ng2-charts";


@NgModule({
  declarations: [
    StatisticComponent
  ],
  imports: [
    CommonModule,
    StatisticRoutingModule,
    NgChartsModule
  ]
})
export class StatisticModule { }
