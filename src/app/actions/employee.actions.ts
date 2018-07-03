import { Employee } from "../models/employee";

export const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';
export const LOAD_EMPLOYEES_SUCCESS = 'LOAD_EMPLOYEES';

export class LoadEmployeesAction {
    readonly type = LOAD_EMPLOYEES;

    constructor(){}
}

export class LoadEmployeesSuccessAction {
    readonly type = LOAD_EMPLOYEES_SUCCESS;

    constructor(public payload: Employee[]){}
}

export type Action
//  = LoadEmployeesAction
//  | LoadEmployeesSuccessAction
= LoadEmployeesSuccessAction