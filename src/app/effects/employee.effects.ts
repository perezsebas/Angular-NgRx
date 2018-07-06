import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as employeeActions from './../actions/employee.actions';
import { mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class EmployeeEffects {

    @Effect()
    goToEmployee$ = this.actions$.pipe(
        ofType(employeeActions.GO_TO_EMPLOYEES),
        mergeMap(() =>
            this.router.navigate(['/employees'])
        )
    );

    constructor(
        private actions$: Actions,
        private router: Router) { }
}