import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  employees: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.http.get('http://localhost:8080/api/employees').subscribe((data: any) => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number) {
    this.http.delete(`http://localhost:8080/api/employees/${id}`).subscribe(() => this.fetchEmployees());
  }
}
