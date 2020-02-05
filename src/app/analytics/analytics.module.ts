import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { Statement2Component } from './statement2/statement2.component';
import { FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';


@NgModule({
  declarations: [AnalyticsComponent, Statement2Component],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    FormsModule,
    Ng2GoogleChartsModule
  ]
})
export class AnalyticsModule { }
