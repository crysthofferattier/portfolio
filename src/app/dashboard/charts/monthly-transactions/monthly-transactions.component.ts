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
      color: "#0e9e70",
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
  }

  getMonthlyTransactions(year: any) {
    this.transactionsService.list(year)
      .subscribe((rsp: any = {}) => {
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

          this.chartOptions.data[0].dataPoints[transactionDate.getMonth()].y += Number(element.total);
        }
        
        this.chartOptions.data[0].dataPoints = this.chartOptions.data[0].dataPoints.filter(e => e.y);

        this.chart.render();
      });
  }

}
