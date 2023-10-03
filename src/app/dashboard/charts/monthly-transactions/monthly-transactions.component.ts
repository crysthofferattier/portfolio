import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from 'src/app/transactions/transactions.service';

@Component({
  selector: 'app-monthly-transactions',
  templateUrl: './monthly-transactions.component.html',
  styleUrls: ['./monthly-transactions.component.css']
})
export class MonthlyTransactionsComponent implements OnInit {
  year = (new Date()).getFullYear();
  chart: any;
  chartOptions = {
    title: {
      text: "Transactions"
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
        { label: "May", y: 0 },
        { label: "Jun", y: 0 },
        { label: "Jul", y: 0 },
        { label: "Aug", y: 0 },
      ]
    }]
  };

  constructor(private transactionsService: TransactionsService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getMonthlyTransactions(params['year']);
    });
  }

  getChartInstance(chart: object) {
    this.chart = chart;
    this.getMonthlyTransactions(this.year);
  }

  getMonthlyTransactions(year: any) {
    this.transactionsService.list(year)
      .subscribe((rsp: any = {}) => {
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let transactions = rsp.data;

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

        for (let index = 0; index < transactions.length; index++) {
          const element = transactions[index];
          const transactionDate = new Date(element.trade_date);

          switch (month[transactionDate.getMonth()]) {
            case "January":
              this.chartOptions.data[0].dataPoints[0].y += Number(element.total);
              break;
            case "February":
              this.chartOptions.data[0].dataPoints[1].y += Number(element.total);
              break;
            case "March":
              this.chartOptions.data[0].dataPoints[2].y += Number(element.total);
              break;
            case "April":
              this.chartOptions.data[0].dataPoints[3].y += Number(element.total);
              break;
            case "May":
              this.chartOptions.data[0].dataPoints[4].y += Number(element.total);
              break;
            case "June":
              this.chartOptions.data[0].dataPoints[5].y += Number(element.total);
              break;
            case "July":
              this.chartOptions.data[0].dataPoints[6].y += Number(element.total);
              break;
            case "August":
              this.chartOptions.data[0].dataPoints[7].y += Number(element.total);
              break;
            case "September":
              this.chartOptions.data[0].dataPoints[8].y += Number(element.total);
              break;
            case "October":
              this.chartOptions.data[0].dataPoints[9].y += Number(element.total);
              break;
            case "November":
              this.chartOptions.data[0].dataPoints[10].y += Number(element.total);
              break;
            case "December":
              this.chartOptions.data[0].dataPoints[11].y += Number(element.total);
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