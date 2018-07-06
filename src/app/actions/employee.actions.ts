import { Employee } from "../models/employee";

export const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const GO_TO_EMPLOYEES = 'GO_TO_EMPLOYEES';

export class LoadEmployeesAction {
    readonly type = LOAD_EMPLOYEES;

    constructor(public payload: Employee[]) { }
}

export class AddEmployeeAction {
    readonly type = ADD_EMPLOYEE;

    constructor(public payload: Employee) { }
}

export class EditEmployeeAction {
    readonly type = EDIT_EMPLOYEE;

    constructor(public payload: Employee) { }
}

export class DeleteEmployeeAction {
    readonly type = DELETE_EMPLOYEE;

    constructor(public payload: string) { }
}

export class GoToEmployees {
    readonly type = GO_TO_EMPLOYEES;
}

export type Actions
    = LoadEmployeesAction
    | AddEmployeeAction
    | EditEmployeeAction
    | DeleteEmployeeAction
    | GoToEmployees