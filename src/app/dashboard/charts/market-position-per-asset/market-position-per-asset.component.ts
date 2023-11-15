import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      this.getTransactions(params['year']);
    });
  }

  getTransactions(year: any): void {
    this.transactionService.list(year)
      .subscribe((rsp: any = {}) => {
        let transactions = rsp.data;
        this.total = 0;
        this.positionPerAsset = [
          { "id": "1", "symbol": "KNCR11", "total": 0 },
          { "id": "4", "symbol": "CPTS11", "total": 0 },
          { "id": "3", "symbol": "BCFF11", "total": 0 },
          { "id": "2", "symbol": "HGLG11", "total": 0 },
          { "id": "9", "symbol": "XPLG11", "total": 0 },
          { "id": "7", "symbol": "PETR4", "total": 0 },                        
          { "id": "5", "symbol": "BBAS3", "total": 0 },
          { "id": "6", "symbol": "ITSA4", "total": 0 },          
          { "id": "8", "symbol": "TAEE11", "total": 0 }          
        ];// manually sorted

        for (let index = 0; index < transactions.length; index++) {
          const element = transactions[index];
          this.total += Number(element.total);

          switch (element.asset.id) {
            case String(this.positionPerAsset[0].id): //KNCR11
              this.positionPerAsset[0].total += Number(element.total);
              break;
            case String(this.positionPerAsset[1].id):
              this.positionPerAsset[1].total += Number(element.total);
              break;
            case String(this.positionPerAsset[2].id):
              this.positionPerAsset[2].total += Number(element.total);
              break;
            case String(this.positionPerAsset[3].id):
              this.positionPerAsset[3].total += Number(element.total);
              break;
            case String(this.positionPerAsset[4].id):
              this.positionPerAsset[4].total += Number(element.total);
              break;
            case String(this.positionPerAsset[5].id):
              this.positionPerAsset[5].total += Number(element.total);
              break;
            case String(this.positionPerAsset[6].id):
              this.positionPerAsset[6].total += Number(element.total);
              break;
            case String(this.positionPerAsset[7].id):
              this.positionPerAsset[7].total += Number(element.total);
              break;
            case String(this.positionPerAsset[8].id):
              this.positionPerAsset[8].total += Number(element.total);
              break;
            default:
              break;
          }
        }
      });
  }
}
