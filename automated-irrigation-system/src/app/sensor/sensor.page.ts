//correr antes npm install --save highcharts

import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription } from 'rxjs';
import { Dispositivo } from '../services/dispositivo';
import { DispositivoService } from '../services/dispositivo.service';
import { Medicion } from '../services/medicion';

declare let require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);



@Component({
  selector: 'sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
})
export class SensorPage implements OnInit, OnDestroy, OnChanges {

  public myChart;
  private chartOptions;


  @Input() medicion: number;
  constructor(private dispositivoService: DispositivoService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.medicion = this.medicion? <number>changes.medicion.currentValue: 0;
    this.generarChart();
  }

  ngOnInit() {
    this.generarChart();
  }

  ionViewWillEnter() {

  }

  ionViewDidEnter() {

  }

  ngOnDestroy(): void {
  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: ''
        }

        ,credits:{enabled:false}


        ,pane: {
            startAngle: -150,
            endAngle: 150
        }
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: 'lightgray'
        }, {
            from: 10,
            to: 30,
            color: 'gray'
        }, {
            from: 30,
            to: 100,
            color: 'green'
        }]
    }
    ,

    series: [{
        name: 'kPA',
        data: [this.medicion],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }
}
