import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_spiritedaway from '@amcharts/amcharts4/themes/spiritedaway';


am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_spiritedaway);


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }
  ngOnInit() {

// Create map instance
    const chart = am4core.create('general-map', am4maps.MapChart);

// Set map definition
    chart.geodata = am4geodata_worldLow;

// Set projection
    chart.projection = new am4maps.projections.Miller();

// Create map polygon series
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    chart.seriesContainer.draggable = false;
    chart.seriesContainer.resizable = false;
    chart.maxZoomLevel = 1;



// Exclude Antartica
    polygonSeries.exclude = ['AQ'];

// Add some data
    polygonSeries.data = [{
      'id': 'UA',
      'name': 'Ukraine',
      'fill': am4core.color('#880005')
    }];


// Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

// Configure series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}';
    polygonTemplate.fill = chart.colors.getIndex(0);

    // Bind 'fill' property to 'fill' key in data
    polygonTemplate.propertyFields.fill = 'fill';
  }



}
