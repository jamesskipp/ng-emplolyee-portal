import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Employee} from "../employee.model";
import {EmployeesService} from "../employees.service";
import * as moment from "moment";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;
  id: string;

  constructor(private employeesService: EmployeesService,
              private route: ActivatedRoute) { }

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
    return moment(date).format('MMM DD YYYY');
  }

}
