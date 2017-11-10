import { IMessage } from './../models/message';
import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input('message') message: IMessage;
  chart: any;
  constructor() { }

  @ViewChild('chartCanvas') chartCanvas: ElementRef;

  ngOnInit() {
  }

  renderChart() {
    const data = {
        type: 'line',
        data: {
          labels: ['2017-01-05', '2017-01-06', '2017-01-07', '2017-01-08', '2017-01-09', '2017-01-10'],
          datasets: [{
            label: '# of Visitas',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgb(91, 162, 255)'
            }
          ]
        },
        options: {
          scales: {
              xAxes: [{
                  type: 'time',
                  time: {
                    displayFormats: {
                        quarter: 'MMM DD'
                    },
                    unit: 'month'
                  }
              }]
          }
      }
    };

      if (this.message.from === 'Bot') {
        const ctx = this.chartCanvas.nativeElement.getContext('2d');
        this.chart = new Chart(ctx, data);
      }
    }
}
