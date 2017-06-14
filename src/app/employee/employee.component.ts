import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {EmployeesService} from "../employees.service";
import {Employee} from "../shared/employee";
import {ActivatedRoute, Params} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit, OnDestroy {
  employee: Employee;
  @ViewChild('employeeForm') currentForm: NgForm;

  constructor(private employeesService: EmployeesService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('employee init');
    this.route.params.subscribe((params: Params) => {
      this.employee = {...this.employeesService.getEmployee(+params['id'])}
    });
  }

  saveEmployee() {
    if (this.currentForm.form.invalid) {
      for (let key in this.currentForm.controls) {
        this.currentForm.controls[key].markAsDirty();
      }
    }
    else {
      this.employeesService.saveEmployee(this.employee);
    }
  }

  ngOnDestroy() {
    this.employeesService.currentEmployee = null;
  }
}
