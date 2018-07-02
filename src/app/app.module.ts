import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
