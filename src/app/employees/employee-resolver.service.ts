import {ActivatedRoute, ActivatedRouteSnapshot, Resolve} from '@angular/router';

import { Employee } from './employee.model';
import { EmployeesService } from './employees.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeResolver implements Resolve<Employee> {

  constructor(private employeesService: EmployeesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Employee> | Promise<Employee> | Employee {
    return this.employeesService.getEmployee(route.params['id']).then((employee) => {
      return employee;
    }, (error) => {
      return error;
    });
  }
}
