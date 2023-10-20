import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions/transactions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from './environments/environments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  portfolioTotal = 0.00;
  portfolioTotalByYear = 0.00;
  currentYear = (new Date()).getFullYear();
  env = environment;
  portfolioAllYears = this.env.portfolioAllYears;

  constructor(private transactionsService: TransactionsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getTotalByYear();
    this.getTotal();
  }

  getTotalByYear() {
    this.activatedRoute.queryParams.subscribe(params => {
      let year = params['year'];

      if (year === undefined) {
        year = (new Date()).getFullYear();
      }

      this.currentYear = year;

      this.transactionsService.list(year)
        .subscribe((rsp: any = {}) => {
          this.portfolioTotalByYear = 0.00;

          for (let index = 0; index < rsp.data.length; index++) {
            this.portfolioTotalByYear += Number(rsp.data[index].total);
          }
        });
    });
  }

  getTotal() {
    this.portfolioTotal = 0.00;

    for (let index = 0; index < this.portfolioAllYears.length; index++) {
      this.transactionsService.list(this.portfolioAllYears[index])
        .subscribe((rsp: any = {}) => {
          for (let index = 0; index < rsp.data.length; index++) {
            this.portfolioTotal += Number(rsp.data[index].total);
          }
        });
    }
  }

  getData(year: any) {
    let pathName = location.pathname;    
    
    this.router.navigate([pathName], { queryParams: { year: year } });
  }
}
