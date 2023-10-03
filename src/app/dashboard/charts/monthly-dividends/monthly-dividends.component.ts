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
    animationEnabled: true,
    axisY: {
      includeZero: true
    },
    data: [{
      type: "column", //change type to bar, line, area, pie, etc
      yValueFormatString: "$#,##0.00",
      color: "#01b8aa",
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

          switch (month[transactionDate.getMonth()]) {
            case "January":
              this.chartOptions.data[0].dataPoints[0].y += Number(element.value);
              break;
            case "February":
              this.chartOptions.data[0].dataPoints[1].y += Number(element.value);
              break;
            case "March":
              this.chartOptions.data[0].dataPoints[2].y += Number(element.value);
              break;
            case "April":
              this.chartOptions.data[0].dataPoints[3].y += Number(element.value);
              break;
            case "May":
              this.chartOptions.data[0].dataPoints[4].y += Number(element.value);
              break;
            case "June":
              this.chartOptions.data[0].dataPoints[5].y += Number(element.value);
              break;
            case "July":
              this.chartOptions.data[0].dataPoints[6].y += Number(element.value);
              break;
            case "August":
              this.chartOptions.data[0].dataPoints[7].y += Number(element.value);
              break;
            case "September":
              this.chartOptions.data[0].dataPoints[8].y += Number(element.value);
              break;
            case "October":
              this.chartOptions.data[0].dataPoints[9].y += Number(element.value);
              break;
            case "November":
              this.chartOptions.data[0].dataPoints[10].y += Number(element.value);
              break;
            case "December":
              this.chartOptions.data[0].dataPoints[11].y += Number(element.value);
              break;
            default:
            // code block
          }
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
