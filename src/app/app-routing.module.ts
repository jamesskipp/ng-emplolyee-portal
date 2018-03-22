import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeesResolver } from './employees/employees-resolver.service';
import {ErrorComponent} from './error/error.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employees'},
  { path: 'employees', component: EmployeeListComponent, resolve: { employees: EmployeesResolver }},
  { path: 'employees/:id', component: EmployeeDetailComponent, resolve: { employee: EmployeesResolver }},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
