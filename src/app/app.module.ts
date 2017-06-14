import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import {EmployeesService} from "./employees.service";

const appRoutes: Routes = [
  { path: 'employees',
    component: EmployeesComponent,
    children: [
      {
        path: ':id',
        component: EmployeeComponent,
      }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: '**',
    redirectTo: '/employees'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
