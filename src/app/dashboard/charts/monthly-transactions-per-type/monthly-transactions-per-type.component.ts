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
          let element = transactions[index];
          let transactionDate = new Date(element.trade_date);

          if (element.asset.asset_type.id === "1") { //FIIs
            this.chartOptions.data[0].dataPoints[transactionDate.getMonth()].y += Number(element.total);
          } else {
            this.chartOptions.data[1].dataPoints[transactionDate.getMonth()].y += Number(element.total);
          }
        }

        this.chart.render();
      });
  }
}
