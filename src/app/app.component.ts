import { Component } from '@angular/core';
import { HttpDataService } from 'src/app/services/http-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpDataService: HttpDataService) { }

  dataSource = new MatTableDataSource();
  title = 'AngularProject';
  tableColumns  :  string[] = ['id', 'nik', 'name', 'divisionsId', 'positionsId', 'type', 'lastPosition', 'createDate', 'action'];

  ngOnInit(): void {
    // Fetch All Students on Page load
    this.getAllStudents()
  }

  getAllStudents() {
    this.httpDataService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(response);
    });
  }
}
