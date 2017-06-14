import {Injectable} from '@angular/core';
import {Employee} from "./shared/employee";

@Injectable()
export class EmployeesService {
  public employees: Employee[] = [
    {
      "id": 1,
      "lastName": "Пупкин",
      "firstName": "Василий",
      "middleName": "Игоревич"
    },
    {
      "id": 2,
      "lastName": "Синицин",
      "firstName": "Алексей",
      "middleName": "Сергеевич"
    },
    {
      "id": 3,
      "lastName": "Бандель",
      "firstName": "Вадим",
      "middleName": "Генадьевич"
    },
    {
      "id": 4,
      "lastName": "Васильев",
      "firstName": "Андрей",
      "middleName": "Николаевич"
    },
    {
      "id": 5,
      "lastName": "Федорова",
      "firstName": "Елена",
      "middleName": "Львовна"
    },
    {
      "id": 6,
      "lastName": "Шаляпин",
      "firstName": "Андрей",
      "middleName": "Львович"
    },
    {
      "id": 7,
      "lastName": "Петров",
      "firstName": "Максим",
      "middleName": "Андреевич"
    },
    {
      "id": 8,
      "lastName": "Путин",
      "firstName": "Владимир",
      "middleName": "Владимирович"
    }
  ];
  public currentEmployee: Employee;
  constructor() {
  }

  getEmployee(id) {
    return this.currentEmployee = this.employees.find(e => e.id === id);
  }

  saveEmployee(employee) {
    if (employee && employee.id) {
      let idx = this.employees.findIndex(e => e.id === employee.id);
      if (idx !== -1) {
        this.employees[idx] = {...employee};
      }
    }
  }
}
