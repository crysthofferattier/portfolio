import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dividends',
  templateUrl: './dividends.component.html',
  styleUrls: ['./dividends.component.css']
})
export class DividendsComponent implements AfterViewInit, OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtTrigger: Subject<DataTables.Settings> = new Subject();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.listDividends(params['year']);

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
