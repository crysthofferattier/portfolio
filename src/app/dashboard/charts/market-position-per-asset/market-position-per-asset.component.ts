import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/app/environments/environments';
import { TransactionsService } from 'src/app/transactions/transactions.service';

@Component({
  selector: 'app-market-position-per-asset',
  templateUrl: './market-position-per-asset.component.html',
  styleUrls: ['./market-position-per-asset.component.css']
})
export class MarketPositionPerAssetComponent implements OnInit {
  positionPerAsset: any = [];
  total = 0;

  constructor(private transactionService: TransactionsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getTransactions();
    });
  }

  getTransactions(): void {
    let years = environment.portfolioAllYears;

    for (let index = 0; index < years.length; index++) {
      const element = years[index];

      this.positionPerAsset = [
        { "id": "1", "symbol": "KNCR11", "total": 0, qtd: 0 },
        { "id": "4", "symbol": "CPTS11", "total": 0, qtd: 0 },
        { "id": "3", "symbol": "BCFF11", "total": 0, qtd: 0 },
        { "id": "2", "symbol": "HGLG11", "total": 0, qtd: 0 },
        { "id": "9", "symbol": "XPLG11", "total": 0, qtd: 0 },
        { "id": "7", "symbol": "PETR4", "total": 0, qtd: 0 },
        { "id": "5", "symbol": "BBAS3", "total": 0, qtd: 0 },
        { "id": "6", "symbol": "ITSA4", "total": 0, qtd: 0 },
        { "id": "8", "symbol": "TAEE11", "total": 0, qtd: 0 },
        { "id": "10", "symbol": "SANB11F", "total": 0, qtd: 0 },
        { "id": "11", "symbol": "RURA11", "total": 0, qtd: 0 }
      ];// manually sorted

      this.transactionService.list(element)
        .subscribe((rsp: any = {}) => {
          if (rsp.data.length > 0) {
            let transactions = rsp.data;
            this.total = 0;

            for (let index = 0; index < transactions.length; index++) {
              const element = transactions[index];
              this.total += Number(element.total);

              switch (element.asset.id) {
                case String(this.positionPerAsset[0].id): //KNCR11
                  this.positionPerAsset[0].total += Number(element.total);
                  this.positionPerAsset[0].qtd += Number(element.quantity);
                  break;
                case String(this.positionPerAsset[1].id):
                  this.positionPerAsset[1].total += Number(element.total);
                  this.positionPerAsset[1].qtd += Number(element.quantity);
                  break;
                case String(this.positionPerAsset[2].id):
                  this.positionPerAsset[2].total += Number(element.total);
                  this.positionPerAsset[2].qtd += Number(element.quantity);
                  break;
                case String(this.positionPerAsset[3].id):
                  this.positionPerAsset[3].total += Number(element.total);
                  this.positionPerAsset[3].qtd += Number(element.quantity);
                  break;
                case String(this.positionPerAsset[4].id):
                  this.positionPerAsset[4].total += Number(element.total);
                  this.positionPerAsset[4].qtd += Number(element.quantity);
                  break;
                case String(this.positionPerAsset[5].id):
                  this.positionPerAsset[5].total += Number(element.total);
                  this.positionPerAsset[5].qtd += Number(element.quantity);
                  break;
                case String(this.positionPerAsset[6].id):
                  this.positionPerAsset[6].total += Number(element.total);
                  this.positionPerAsset[6].qtd += Number(element.quantity);
                  break;
                case String(this.positionPerAsset[7].id):
                  this.positionPerAsset[7].total += Number(element.total);
                  this.positionPerAsset[7].qtd += Number(element.quantity);
                  break;
                case String(this.positionPerAsset[8].id):
                  this.positionPerAsset[8].total += Number(element.total);
                  this.positionPerAsset[8].qtd += Number(element.quantity);
                  break;
                case String(this.positionPerAsset[9].id):
                  this.positionPerAsset[9].total += Number(element.total);
                  this.positionPerAsset[9].qtd += Number(element.quantity);
                  break;
                case String(this.positionPerAsset[10].id):
                  this.positionPerAsset[10].total += Number(element.total);
                  this.positionPerAsset[10].qtd += Number(element.quantity);
                  break;
                default:
                  break;
              }
            }
          }
        });
    }
  }
}
