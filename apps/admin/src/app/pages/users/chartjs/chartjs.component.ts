import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'bluebits-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss'],
})
export class ChartjsComponent implements OnInit {
  constructor() {}

  chartOptions = {
    title: {
      text: "Basic Column Chart in Angular"
    },
    data: [{
      type: "line",
      dataPoints: [
        { label: "Apple",  y: 10  },
        { label: "Orange", y: 15  },
        { label: "Banana", y: 25  },
        { label: "Mango",  y: 30  },
        { label: "Grape",  y: 28  }
      ]
    }]

  };

  ngOnInit(): void {}
}
