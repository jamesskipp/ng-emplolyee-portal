import { Employee} from './employee.model';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { EmployeesService} from './employees.service';
import { Observable} from 'rxjs/Observable';
import { Injectable} from '@angular/core';

@Injectable()
export class EmployeesResolver implements Resolve<Employee[]> {

  constructor(private employeesService: EmployeesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Employee[]> | Promise<Employee[]> | Employee[] {
    return this.employeesService.getRequestEmployees(route.params['page'], route.params['size'], route.params['sort'])
      .toPromise().then((data) => {
        return this.employeesService.mapEmployees(data);
      }, () => {
        return [];
      });
  }
}
