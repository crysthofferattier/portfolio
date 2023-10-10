import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements AfterViewInit, OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtTrigger: Subject<DataTables.Settings> = new Subject();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {    
    this.activatedRoute.queryParams.subscribe(params => {
      this.listTransactions(params['year']);

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next(this.dtOptions);
      });
    });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(this.dtOptions);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
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
