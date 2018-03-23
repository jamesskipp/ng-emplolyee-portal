import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Employee } from './employee.model';
import { EmployeesService } from './employees.service';

/**
 * Resolver for the Employee-Detail Component
 */
@Injectable()
export class EmployeeResolver implements Resolve<Employee> {

  constructor(private employeesService: EmployeesService,
              private router: Router) { }

  /**
   * Resolver for a single employee. Uses getEmployee to find out if the
   * targeted employee already exists in the employees array, and makes
   * and http request to the employee portal api if not. Reroutes the user
   * to /employees if there is an error.
   *
   * @param {ActivatedRouteSnapshot} route
   * @returns {Observable<Employee> | Promise<Employee> | Employee}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<Employee> | Promise<Employee> | Employee {
    return this.employeesService.getEmployee(route.params['id']).then((employee) => {
      return employee;
    }, (error) => {
      // Alert the user they're not going to the url they want
      alert('Error finding employee ' + route.params['id']);
      // Navigate back to /employees in case of error finding individual employee
      this.router.navigate(['/employees']);
      return error;
    });
  }
}
