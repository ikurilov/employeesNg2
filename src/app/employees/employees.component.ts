import {Component, OnInit} from '@angular/core';

import {Employee} from "../shared/employee";
import {ActivatedRoute, Params, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {EmployeesService} from "../employees.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  selectedId: number;

  constructor(private router: Router, private route: ActivatedRoute, public employeesService: EmployeesService) {
  }

  ngOnInit() {
    console.log('employees init');
    this.employees = this.employeesService.employees;
  }
  selectEmployee(employee: Employee) {
    this.router.navigate(['employees/', employee.id]);
  }
}
