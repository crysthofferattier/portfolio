import { Component } from '@angular/core';
import { TransactionsService } from '../transactions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-cards',
  templateUrl: './transaction-cards.component.html',
  styleUrls: ['./transaction-cards.component.css']
})
export class TransactionCardsComponent {
  year = (new Date()).getFullYear();
  transactions = [];
  total = 0;
  totalFIIs = 0;
  totalStocks = 0;

  constructor(private transactionsService: TransactionsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getTransactions(params['year']);
    });
  }

  getTransactions(year: any) {
    this.transactionsService.list(year)
      .subscribe((rsp: any = {}) => {
        this.totalFIIs = 0;
        this.totalStocks = 0;
        this.total = 0;

        for (let index = 0; index < rsp.data.length; index++) {
          if (rsp.data[index].asset.asset_type.id === "1") {
            this.totalFIIs += Number(rsp.data[index].total);
          } else {
            this.totalStocks += Number(rsp.data[index].total);
          }

          this.total += Number(rsp.data[index].total);
        }
      });
  }
}
