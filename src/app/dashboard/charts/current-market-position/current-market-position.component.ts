import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from 'src/app/transactions/transactions.service';

@Component({
  selector: 'app-current-market-position',
  templateUrl: './current-market-position.component.html',
  styleUrls: ['./current-market-position.component.css']
})
export class CurrentMarketPositionComponent implements OnInit {
  chart: any;
  chartOptions = {
    animationEnabled: true,
    title: {
      text: "Market Position",
    },
    data: [{
      type: "pie",
      startAngle: 90,
      toolTipContent: "{y} - #percent %",
      yValueFormatString: "R$ #,###.##",
      showInLegend: true,
      legendText: "{name}",
      dataPoints: [
        { y: 0, name: "FIIs" },
        { y: 0, name: "Stocks" }
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
        let totalFIIs = 0;
        let totalStocks = 0;

        for (let index = 0; index < transactions.length; index++) {
          const element = transactions[index];
          if (element.asset.asset_type.id === "1") { //FIIs
            totalFIIs += Number(element.total);
          } else if (element.asset.asset_type.id === "2") {
            totalStocks += Number(element.total);
          }
        }

        this.chartOptions.data[0].dataPoints[0].y = totalFIIs;
        this.chartOptions.data[0].dataPoints[1].y = totalStocks;


        this.chart.render();
      });
  }
}
