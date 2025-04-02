import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  newEmployee: any = {};

  constructor(private http: HttpClient) {}

  addEmployee() {
    this.http.post('http://localhost:8080/api/employees', this.newEmployee)
      .subscribe(() => this.newEmployee = {});
  }
}
