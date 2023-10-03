import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.listTransactions(params['year']);
    });
  }

  listTransactions(year: any) {
    if (year === undefined) {
      year = (new Date()).getFullYear();
    }

    this.dtOptions = {
      ajax: 'assets/data/' + year + '/transactions.json',
      columns: [{
        title: 'DATE',
        data: 'trade_date',
      }, {
        title: 'DATE',
        data: 'trade_date',
        render: function (data, type) {
          var dateDisplay = data.split('-').reverse().join('/');
          return type === "display" || type === "filter" ? dateDisplay : data;
        }
      }, {
        title: 'Type',
        data: 'asset.asset_type.name'
      }, {
        title: 'ASSET',
        data: 'asset.symbol'
      }, {
        title: 'QUANTITY',
        data: 'quantity'
      }, {
        title: 'VALUE',
        data: 'value',
        render: function (data) {
          return "R$ " + data;
        }
      }, {
        title: 'TOTAL',
        data: 'total',
        render: function (data) {
          return "R$ " + data;
        }
      }],
      columnDefs: [{
        targets: 0,
        visible: false,
        searchable: false
      }],
      order: [[0, 'desc']]
    };
  }

}
