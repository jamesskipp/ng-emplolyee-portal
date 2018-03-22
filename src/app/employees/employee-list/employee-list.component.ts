import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(private employeesService: EmployeesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.employees = this.route.snapshot.data['employees'];
    console.log(this.employees);
    // this.route.data.subscribe(() => {
    //   this.employeesService.fetchEmployees(this.route.params['page'], this.route.params['size'], this.route.params['sort'])
    //     .then((employees) => {
    //     this.employees = employees;
    //     console.log(employees);
    //   })
    // });
    // console.log(this.employees);
  }

  showEmployeeList() {

  }

}
