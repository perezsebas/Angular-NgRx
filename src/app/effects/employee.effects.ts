import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import * as employeeActions from './../actions/employee.actions';
// import 'rxjs/add/operator/switchMap';
import { switchMap } from 'rxjs/operators';



@Injectable()
export class EmployeeEffects {

//     constructor(
//         // private employeeService: employeeService,
//         private actions$: Actions
//     ) { }

    // @Effect() loadEmployees$ = this.actions$
    //     .ofType(employeeActions.LOAD_EMPLOYEES)
    //     .switchMap(() => this.employeeService.loadEmployees()
    //         .map(employees => (new employeeActions.LoadEmployeesSuccessAction(employees))
    //         )
}