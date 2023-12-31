import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DividendsService } from 'src/app/dividends/dividends.service';

@Component({
  selector: 'app-dividends-card',
  templateUrl: './dividends-card.component.html',
  styleUrls: ['./dividends-card.component.css']
})
export class DividendsCardComponent {
  year = (new Date()).getFullYear();
  total = 0;
  totalFIIs = 0;
  totalStocks = 0;

  constructor(private dividendsService: DividendsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getDividends(params['year']);
    });
  }

  getDividends(year: any) {
    this.dividendsService.list(year)
      .subscribe((rsp: any = {}) => {
        this.totalFIIs = 0;
        this.totalStocks = 0;
        this.total = 0;
        
        for (let index = 0; index < rsp.data.length; index++) {
          if (rsp.data[index].asset.asset_type.id === "1") {
            this.totalFIIs += Number(rsp.data[index].value);
          } else {
            this.totalStocks += Number(rsp.data[index].value);
          }

          this.total += Number(rsp.data[index].value);
        }
      });
  }
}
