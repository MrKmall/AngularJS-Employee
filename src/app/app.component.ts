import { Component, ViewChild } from '@angular/core';
import { HttpDataService } from 'src/app/services/http-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as _ from 'lodash';
import { NgForm } from '@angular/forms';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpDataService: HttpDataService) { }

  @ViewChild('employeeForm', { static: false })

  employeeForm: NgForm;

  dataSource = new MatTableDataSource();
  tableColumns  :  string[] = ['id', 'nik', 'name', 'divisionsId', 'positionsId', 'type', 'lastPosition', 'createDate', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    // Fetch All Students on Page load
    this.getAllStudents();
  }

  ngAfterViewInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => this.dataSource.sort = this.sort);
  }

  getAllStudents() {
    this.httpDataService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(response);
    });
  }

  deleteEmployee(id) {
    this.httpDataService.deleteItem(id).subscribe((response: any) => {

      // Approach #1 to update datatable data on local itself without fetching new data from server
      this.dataSource.data = this.dataSource.data.filter((o: Employee) => {
        return o.id !== id ? o : false;
      })

      console.log(this.dataSource.data);

      // Approach #2 to re-call getAllStudents() to fetch updated data
      // this.getAllStudents()
    });
  }
}
