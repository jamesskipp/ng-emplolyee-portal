import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import * as moment from 'moment';

import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  queryParams: Params;
  totalPages: number;

  constructor(private employeesService: EmployeesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.employees = this.employeesService.employees;
    this.totalPages = this.employeesService.totalPages;
    this.queryParams = this.route.snapshot.queryParams;

    this.route.queryParams.subscribe((params: Params) => {
      this.employeesService.fetchEmployees(params).then(() => {
        this.employees = this.employeesService.employees;
        this.queryParams = this.route.snapshot.queryParams;
        this.totalPages = this.employeesService.totalPages;
      });
    });
  }

  /**
   * Returns an array of numbers from 0 ... totalPages for ngFor in pagination
   *
   * @returns {number[]}
   */
  getPageArray() {
    return Array.from(Array(this.totalPages), (x, i) => i);
  }

  /**
   * Formats a date in MM DD YYYY format.
   *
   * @param {Date} date
   * @returns {string}
   */
  formatDate(date: Date): string {
    return moment(date).format('MMM DD YYYY');
  }
}
