import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsDataService } from 'src/app/_services/usData.service';

@Component({
  selector: 'app-usData',
  templateUrl: './usData.component.html',
  styleUrls: ['./usData.component.scss'],
})
export class UsDataComponent implements OnInit {
  data: any;
  displayedColumns: string[] = [
    'date',
    'state',
    'testing',
    'cases',
    'hospitalized',
    'death',
    'totalResult',
  ];

  usDataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );

  constructor(private usCasesService: UsDataService) {}
  // @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  pageSizes = [10, 20, 50, 100];

  ngAfterViewInit() {
    this.usDataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.fillSlotCategoryGrid();
  }
  fillSlotCategoryGrid() {
    this.usCasesService.getUsCovidData().subscribe((cases: any[]) => {
      this.data = cases;
      this.usDataSource = new MatTableDataSource<any>(cases);
      this.usDataSource.paginator = this.paginator;
    });
  }
}
