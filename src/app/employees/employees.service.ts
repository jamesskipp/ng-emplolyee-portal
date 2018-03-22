import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Employee } from './employee.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeesService implements OnInit {

  /**
   *
   */
  private _employees: Employee[];

  /**
   *
   * @type {string}
   */
  private employeesAPIUrl = "http://localhost:8080/employees";

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  /**
   *
   * @returns {Employee[]}
   */
  get employees(): Employee[] {
    return this._employees;
  }

  /**
   *
   * @param {string} page
   * @param {string} size
   * @param {string} sort
   * @returns {Promise<Employee[]>}
   */
  fetchEmployees(page: string, size: string, sort: string): Promise<Employee[]> {
    return this.getRequestEmployees(page, size, sort)
      .toPromise().then((data) => {
        return this.mapEmployees(data);
      }, () => {
        return [];
      });
  }

  /**
   *
   * @param {string} page
   * @param {string} size
   * @param {string} sort
   * @returns {Observable<any>}
   */
  getRequestEmployees(page: string = '0', size: string = '25', sort: string = 'lastName'): Observable<any>  {
    return this.http.get(this.employeesAPIUrl, {
      params: {
        page,
        size,
        sort,
      },
    });
  }

  /**
   *
   * @param {Object[]} employeesObj
   * @returns {Employee[]}
   */
  public mapEmployees(employeesObj: Object[]): Employee[] {
    let employees = [];

    employeesObj['_embedded']['employee'].forEach((employee) => {
      employees.push(new Employee(
        employee['firstName'],
        employee['lastName'],
        employee['salary'],
        employee['hiredate'],
      ));
    });

    return employees;
  }

  /**
   *
   * @param {string} id
   * @returns {Observable<any>}
   */
  getRequestEmployee(id: string): Observable<any> {
    // Return null if no id was given
    if (id.length == 0) {
      return null;
    }

    return this.http.get(this.employeesAPIUrl + '/' + id);
  }

}
