import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dividends',
  templateUrl: './dividends.component.html',
  styleUrls: ['./dividends.component.css']
})
export class DividendsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.listDividends(params['year']);
    });
  }

  listDividends(year: any): void {
    this.dtOptions = {
      ajax: 'assets/data/' + year + '/dividends.json',
      columns: [{
        title: 'DATE',
        data: 'date',
      }, {
        title: 'DATE',
        data: 'date',
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
        title: 'SHARE',
        data: 'share'
      }, {
        title: 'VALUE',
        data: 'value',
        render: function (data, type) {
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
