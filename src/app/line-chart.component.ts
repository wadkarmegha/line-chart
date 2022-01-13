import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'line-chart',
  styles: [],
  template: `
  <h1>Line Chart</h1>
  <div [chart]="chart"></div>
  `,
})
export class LineChartComponent implements OnInit {
  constructor() {}

  chart = new Chart({
    title: {
      text: 'Expenses Growth',
    },
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2017',
      },
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        name: 'Food',
        type: 'line',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
      {
        name: 'Groceries',
        type: 'line',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
      },
      {
        name: 'Travel',
        type: 'line',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  });

  ngOnInit() {}
}
