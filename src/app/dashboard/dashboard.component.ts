import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  year = '';

  constructor(private router: Router) { }

  getData(year: any){
    this.router.navigate(['/dashboard'], {queryParams: {year: year}});
  }
}
