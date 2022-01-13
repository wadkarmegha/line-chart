import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChartModule } from 'angular-highcharts';
import { LineChartComponent } from './line-chart.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ChartModule],
  declarations: [AppComponent, HelloComponent, LineChartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
