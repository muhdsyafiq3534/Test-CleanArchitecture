import { Component, OnInit } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-Amchart',
  templateUrl: './Amchart.component.html',
  styleUrls: ['./Amchart.component.css'],
})
export class AmchartComponent implements OnInit {

  chart1 : any
  constructor() {}

  ngOnInit() {
    this.getchart();
    this.getchart2();
  }

  getchart() {
    let chart = am4core.create('chartdiv', am4charts.PieChart);

    // Create pie series
    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = 'litres';
    series.dataFields.category = 'country';



    // Add data
    chart.data = [
      {
        country: 'Lithuania',
        litres: 501.9,
      },
      {
        country: 'Czech Republic',
        litres: 301.9,
      },
      {
        country: 'Ireland',
        litres: 201.1,
      },
      {
        country: 'Germany',
        litres: 165.8,
      },
      {
        country: 'Australia',
        litres: 139.9,
      },
      {
        country: 'Austria',
        litres: 128.3,
      },
      {
        country: 'UK',
        litres: 99,
      },
      {
        country: 'Belgium',
        litres: 60,
      },
      {
        country: 'The Netherlands',
        litres: 50,
      },
    ];

    // And, for a good measure, let's add a legend
    chart.legend = new am4charts.Legend();

    /////////////////////

    let chart1 = am4core.create('chartdiv1', am4charts.XYChart);
    chart.paddingRight = 20;


    chart.exporting.menu = new am4core.ExportMenu();

    // chart.exporting.extraSprites.push({
    //   "marginLeft": 20,
    //   "position": "right",
    //   "sprite": chart1
    // });

    let data = [];
    let visits = 10;
    for (var i = 1; i < 50000; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i), value: visits });
    }

    chart1.data = data;

    let dateAxis = chart1.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.minZoomCount = 5;

    // this makes the data to be grouped
    dateAxis.groupData = true;
    dateAxis.groupCount = 500;

    let valueAxis = chart1.yAxes.push(new am4charts.ValueAxis());

    let series1 = chart1.series.push(new am4charts.LineSeries());
    series1.dataFields.dateX = 'date';
    series1.dataFields.valueY = 'value';
    series1.tooltipText = '{valueY}';
    series1.tooltip.pointerOrientation = 'vertical';
    series1.tooltip.background.fillOpacity = 0.5;

    chart1.cursor = new am4charts.XYCursor();
    chart1.cursor.xAxis = dateAxis;

    let scrollbarX = new am4core.Scrollbar();
    scrollbarX.marginBottom = 20;
    chart1.scrollbarX = scrollbarX;
  }

  getchart2() {

  }
}
