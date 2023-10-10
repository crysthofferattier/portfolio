import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { TransactionsService } from './transactions/transactions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  portfolioTotal = 0.00;
  portfolioTotalByYear = 0.00;
  currentYear = (new Date()).getFullYear();  
  year = [
    2023,
    //2024
  ];

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

    for (let index = 0; index < this.year.length; index++) {
      this.transactionsService.list(this.year[index])
        .subscribe((rsp: any = {}) => {
          for (let index = 0; index < rsp.data.length; index++) {
            this.portfolioTotal += Number(rsp.data[index].total);
          }
        });
    }
  }

  getData(year: any) {
    let pathName = location.pathname;
    console.log(pathName);
    //this.router.navigate(['/dashboard'], { queryParams: { year: year } });
    this.router.navigate([pathName], { queryParams: { year: year } });
  }
}
