import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import {Claim,ClaimService } from '@eshop/orders';



@Component({
  selector: 'admin-dashboard',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']



})
export class StatisticsComponent implements OnInit {
  @ViewChild('myChart', {static: true}) private chartRef: ElementRef;
  private chart: Chart;

  data: any;

  constructor(private claimsServicece : ClaimService,
 
   ) { }

   ngOnInit() {
    this.claimsServicece.getClaimsMonthly().subscribe((claimsByMonth) => {
      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Claims Per Month',
            backgroundColor: '#f87979',
            data: claimsByMonth
          }
        ]
      };

      const chartElement = this.chartRef.nativeElement;
      this.chart = new Chart(chartElement, {
        type: 'bar',
        data: this.data,
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    });
  }
}
