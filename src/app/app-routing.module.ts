import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DividendsComponent } from './dividends/dividends.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:year', component: DashboardComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'transactions/:year', component: TransactionsComponent },
  { path: 'dividends', component: DividendsComponent },
  { path: 'dividends/:year', component: DividendsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
