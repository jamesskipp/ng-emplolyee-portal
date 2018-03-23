import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  /**
   * A Single Employee as fetched from the employeesService
   * array of Employees or direcetly from the api
   */
  employee: Employee;

  /**
   * The id of the desired Employee
   */
  id: string;

  constructor(private employeesService: EmployeesService,
              private route: ActivatedRoute) { }

  /**
   * ngOnInit syncs the id and value of employee with the
   * EmployeesService
   */
  ngOnInit() {
    this.employee = this.route.snapshot.data['employee'];

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.employeesService.getEmployee(this.id).then((data) => {
        this.employee = data;
      });
    });
  }

  /**
   * Formats a date in MM DD YYYY format.
   *
   * @param {Date} date
   * @returns {string}
   */
  formatDate(date: Date): string {
    return this.employeesService.formatDate(date);
  }

}
