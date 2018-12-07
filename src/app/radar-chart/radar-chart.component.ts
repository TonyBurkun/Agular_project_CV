import { Component, OnInit } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_material from '@amcharts/amcharts4/themes/material';


am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_material);

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})

export class RadarChartComponent implements OnInit {
  private chart: am4charts.RadarChart;


  constructor() { }

   ngOnInit() {
    const chart = am4core.create('radar-chart', am4charts.RadarChart);

// Add data
    chart.data = [{
      'category': 'SQL',
      'value': 25,
      'full': 100
    }, {
      'category': 'CSS',
      'value': 50,
      'full': 100
    }, {
      'category': 'HTML',
      'value': 55,
      'full': 100
    }, {
      'category': 'JavaScript',
      'value': 65,
      'full': 100
    }, {
      'category': 'React JS',
      'value': 60,
      'full': 100,
    }, {
      'category': 'React Native',
      'value': 60,
      'full': 100,
    }];

// Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(20);

   // Set number format
   chart.numberFormatter.numberFormat = `#.#'%'`;

// Create axes
    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis<am4charts.AxisRendererRadial>());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = 'right';
    categoryAxis.renderer.labels.template.fontWeight = '500';
    categoryAxis.renderer.labels.template.adapter.add('fill', function(fill, target) {
      return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
    });
    categoryAxis.renderer.minGridDistance = 10;
    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;

// Create series
    const series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = 'full';
    series1.dataFields.categoryY = 'category';
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor('alternativeBackground');
    series1.columns.template.fillOpacity = 0.08;
    // series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;

    const series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = 'value';
    series2.dataFields.categoryY = 'category';
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = '{category}: [bold]{value}[/]';
    series2.columns.template.radarColumn.cornerRadius = 20;

    series2.columns.template.adapter.add('fill', function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

  }

}
