import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  /**
   * Array of Employees synced with the equivalent
   * array located in the employees service
   */
  employees: Employee[];

  /**
   * The params based on the last call to the api
   * by the employees service. Synced with employees
   * Service
   */
  queryParams: Params;

  /**
   * The totalPages present in the datbase based on
   * the call to the employee portal api. Synced with
   * the equivalent value of the employeesService.
   */
  totalPages: number;

  constructor(private employeesService: EmployeesService,
              private route: ActivatedRoute) { }

  /**
   * ngOnInit synchronizes the values between this view and the
   * employees service - employess, totalPages, and queryParams.
   */
  ngOnInit() {
    this.employees = this.employeesService.employees;
    this.totalPages = this.employeesService.totalPages;
    this.queryParams = this.route.snapshot.queryParams;

    // Subscribe for changes to the parameters
    this.route.queryParams.subscribe((params: Params) => {
      this.employeesService.fetchEmployees(params).then(() => {

        this.employees = this.employeesService.employees;
        this.queryParams = this.route.snapshot.queryParams;
        this.totalPages = this.employeesService.totalPages;
      });
    });
  }

  /**
   * Returns an array of numbers from 0 ... totalPages for ngFor in
   * the pagination section of the html
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
    return this.employeesService.formatDate(date);
  }
}
