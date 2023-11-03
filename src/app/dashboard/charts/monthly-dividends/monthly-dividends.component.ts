import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DividendsService } from 'src/app/dividends/dividends.service';

@Component({
  selector: 'app-monthly-dividends',
  templateUrl: './monthly-dividends.component.html',
  styleUrls: ['./monthly-dividends.component.css']
})
export class MonthlyDividendsComponent {
  year = (new Date()).getFullYear();
  chart: any;
  chartOptions = {
    title: {
      text: "Dividends"
    },
    animationEnabled: false,
    axisY: {
      includeZero: true
    },
    data: [{
      type: "column",
      yValueFormatString: "$#,##0.00",
      color: "#4f81bc",
      dataPoints: [
        { label: "Jun", y: 0 },
        { label: "Jul", y: 0 },
        { label: "Aug", y: 0 },
      ]
    }]
  }

  constructor(private dividendsService: DividendsService,
    private activatedRoute: ActivatedRoute) {
  }

  getChartInstance(chart: object) {
    this.chart = chart;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getMonthlyTransactions(params['year']);
    });
  }

  getMonthlyTransactions(year: any) {
    this.dividendsService.list(year)
      .subscribe((rsp: any = {}) => {
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let dividends = rsp.data;

        this.chartOptions.data[0].dataPoints = [
          { label: "Jan", y: 0 },
          { label: "Fev", y: 0 },
          { label: "Mar", y: 0 },
          { label: "Apr", y: 0 },
          { label: "May", y: 0 },
          { label: "Jun", y: 0 },
          { label: "Jul", y: 0 },
          { label: "Aug", y: 0 },
          { label: "Sept", y: 0 },
          { label: "Oct", y: 0 },
          { label: "Nov", y: 0 },
          { label: "Dec", y: 0 },
        ];

        for (let index = 0; index < dividends.length; index++) {
          const element = dividends[index];
          const transactionDate = new Date(element.date);

          this.chartOptions.data[0].dataPoints[transactionDate.getMonth()].y += Number(element.value);
        }

        const dataTablePointsLen = this.chartOptions.data[0].dataPoints.length;

        for (let index = 0; index < dataTablePointsLen; index++) {
          if (this.chartOptions.data[0].dataPoints[index] !== undefined && this.chartOptions.data[0].dataPoints[index].y === 0) {
            this.chartOptions.data[0].dataPoints.splice(index, 1);
          }
        }

        this.chart.render();
      });
  }

}
