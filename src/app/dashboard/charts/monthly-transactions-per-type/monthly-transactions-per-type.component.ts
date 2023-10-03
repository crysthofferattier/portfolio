import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from 'src/app/transactions/transactions.service';

@Component({
  selector: 'app-monthly-transactions-per-type',
  templateUrl: './monthly-transactions-per-type.component.html',
  styleUrls: ['./monthly-transactions-per-type.component.css']
})
export class MonthlyTransactionsPerTypeComponent implements OnInit {
  chart: any;
  chartOptions = {
    animationEnabled: true,
    title: {
      text: "Transactions per Type"
    },
    axisX: {
      labelAngle: -90
    },
    toolTip: {
      shared: true
    },
    data: [{ // 0
      type: "column",
      name: "FIIs",
      legendText: "FIIs",
      showInLegend: true,
      dataPoints: [
        { label: "", y: 0, type_id: 0 }
      ]
    }, {// 1
      type: "column",
      name: "Stocks",
      legendText: "Stocks",
      showInLegend: true,
      dataPoints: [
        { label: "", y: 0, type_id: 0 }
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

    this.chartOptions.data[0].dataPoints.pop();
    this.chartOptions.data[1].dataPoints.pop();
  }

  getMonthlyTransactions(year: any) {
    this.transactionsService.list(year)
      .subscribe((rsp: any = {}) => {
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let transactions = rsp.data;

        this.chartOptions.data[0].dataPoints = [
          { label: "Jan", y: 0, type_id: 0 },
          { label: "Fev", y: 0, type_id: 0 },
          { label: "Mar", y: 0, type_id: 0 },
          { label: "Apr", y: 0, type_id: 0 },
          { label: "May", y: 0, type_id: 0 },
          { label: "Jun", y: 0, type_id: 0 },
          { label: "Jul", y: 0, type_id: 0 },
          { label: "Ago", y: 0, type_id: 0 },
          { label: "Sept", y: 0, type_id: 0 },
          { label: "Oct", y: 0, type_id: 0 },
          { label: "Nov", y: 0, type_id: 0 },
          { label: "Dec", y: 0, type_id: 0 },
        ];

        this.chartOptions.data[1].dataPoints = [
          { label: "Jan", y: 0, type_id: 0 },
          { label: "Fev", y: 0, type_id: 0 },
          { label: "Mar", y: 0, type_id: 0 },
          { label: "Apr", y: 0, type_id: 0 },
          { label: "May", y: 0, type_id: 0 },
          { label: "Jun", y: 0, type_id: 0 },
          { label: "Jul", y: 0, type_id: 0 },
          { label: "Ago", y: 0, type_id: 0 },
          { label: "Sept", y: 0, type_id: 0 },
          { label: "Oct", y: 0, type_id: 0 },
          { label: "Nov", y: 0, type_id: 0 },
          { label: "Dec", y: 0, type_id: 0 },
        ];

        for (let index = 0; index < transactions.length; index++) {
          const element = transactions[index];
          const transactionDate = new Date(element.trade_date);

          switch (month[transactionDate.getMonth()]) {
            case "January":
              if (element.asset.asset_type.id === "1") { //FIIs
                this.chartOptions.data[0].dataPoints[0].y += Number(element.total);
              } else if (element.asset.asset_type.id === "2") {
                this.chartOptions.data[1].dataPoints[0].y += Number(element.total);
              }
              break;
            case "February":
              this.chartOptions.data[0].dataPoints[1].y += Number(element.total);
              break;
            case "March":
              if (element.asset.asset_type.id === "1") { //FIIs
                this.chartOptions.data[0].dataPoints[2].y += Number(element.total);
              } else if (element.asset.asset_type.id === "2") {
                this.chartOptions.data[1].dataPoints[2].y += Number(element.total);
              }
              break;
            case "April":
              if (element.asset.asset_type.id === "1") { //FIIs
                this.chartOptions.data[0].dataPoints[3].y += Number(element.total);
              } else if (element.asset.asset_type.id === "2") {
                this.chartOptions.data[1].dataPoints[3].y += Number(element.total);
              }
              break;
            case "May":
              if (element.asset.asset_type.id === "1") { //FIIs
                this.chartOptions.data[0].dataPoints[4].y += Number(element.total);
              } else if (element.asset.asset_type.id === "2") {
                this.chartOptions.data[1].dataPoints[4].y += Number(element.total);
              }
              break;
            case "June":
              if (element.asset.asset_type.id === "1") { //FIIs
                this.chartOptions.data[0].dataPoints[5].y += Number(element.total);
              } else if (element.asset.asset_type.id === "2") {
                this.chartOptions.data[1].dataPoints[5].y += Number(element.total);
              }
              break;
            case "July":
              if (element.asset.asset_type.id === "1") { //FIIs
                this.chartOptions.data[0].dataPoints[6].y += Number(element.total);
              } else if (element.asset.asset_type.id === "2") {
                this.chartOptions.data[1].dataPoints[6].y += Number(element.total);
              }
              break;
            case "August":
              if (element.asset.asset_type.id === "1") { //FIIs
                this.chartOptions.data[0].dataPoints[7].y += Number(element.total);
              } else if (element.asset.asset_type.id === "2") {
                this.chartOptions.data[1].dataPoints[7].y += Number(element.total);
              }
              break;
            case "September":
              if (element.asset.asset_type.id === "1") { //FIIs
                this.chartOptions.data[0].dataPoints[8].y += Number(element.total);
              } else if (element.asset.asset_type.id === "2") {
                this.chartOptions.data[1].dataPoints[8].y += Number(element.total);
              }
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

        this.chart.render();
      });
  }
}
