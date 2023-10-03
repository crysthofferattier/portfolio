import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DividendsComponent } from './dividends/dividends.component';
import { TransactionCardsComponent } from './transactions/cards/transaction-cards.component';
import { DividendsCardComponent } from './dashboard/dividends-card/dividends-card.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { MonthlyTransactionsComponent } from './dashboard/charts/monthly-transactions/monthly-transactions.component';
import { MonthlyDividendsComponent } from './dashboard/charts/monthly-dividends/monthly-dividends.component';
import { MonthlyTransactionsPerTypeComponent } from './dashboard/charts/monthly-transactions-per-type/monthly-transactions-per-type.component';
import { MonthlyDividendsPerTypeComponent } from './dashboard/charts/monthly-dividends-per-type/monthly-dividends-per-type.component';
import { CurrentMarketPositionComponent } from './dashboard/charts/current-market-position/current-market-position.component';
import { MarketPositionPerAssetComponent } from './dashboard/charts/market-position-per-asset/market-position-per-asset.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransactionsComponent,
    DividendsComponent,
    TransactionCardsComponent,
    DividendsCardComponent,
    ChartsComponent,
    MonthlyTransactionsComponent,
    MonthlyDividendsComponent,
    MonthlyTransactionsPerTypeComponent,
    MonthlyDividendsPerTypeComponent,
    CurrentMarketPositionComponent,
    MarketPositionPerAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    CanvasJSAngularChartsModule,
    FormsModule
  ],
  providers: [MonthlyTransactionsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
