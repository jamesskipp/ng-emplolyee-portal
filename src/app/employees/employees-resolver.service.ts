import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { Injectable} from '@angular/core';

import { Employee} from './employee.model';
import { EmployeesService} from './employees.service';

/**
 * Resolver for the EmployeesList component
 */
@Injectable()
export class EmployeesResolver implements Resolve<Employee[]> {

  constructor(private employeesService: EmployeesService) { }

  /**
   * Resolver for the employees data. Resolved once the data is returned from the api
   * and turned into an Array of Employees. Employees is left empty if an error occurs.
   *
   * @param {ActivatedRouteSnapshot} route
   * @returns {Observable<Employee[]> | Promise<Employee[]> | Employee[]}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<Employee[]> | Promise<Employee[]> | Employee[] {
    // Set default params to page = 0, size = 10, sort = lastName
    route.queryParams = {
      page: +route.queryParams['page'] || 0,
      size: +route.queryParams['size'] || 10,
      sort: route.queryParams['sort'] || 'lastName',
    };

    // Request from the api
    return this.employeesService.getRequestEmployees(route.queryParams['page'], route.queryParams['size'], route.queryParams['sort'])
      .toPromise().then((data) => {
        // Set the value of employees in the employees service using mapEmployees
        this.employeesService.employees = this.employeesService.mapEmployees(data);
        // Set the value of the params
        this.employeesService.queryParams = route.queryParams;
        // Set the value of the total pages returned
        this.employeesService.totalPages = +data['page']['totalPages'];
        return this.employeesService.employees;
      }, () => {
        return this.employeesService.employees;
      });
  }
}
