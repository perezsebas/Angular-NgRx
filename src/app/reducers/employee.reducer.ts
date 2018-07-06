import * as employeeActions from './../actions/employee.actions';
import { AppState } from '../models/app-state';

const initialState: AppState = {
    employees: []
};

export function employeeReducer(state = initialState, action: employeeActions.Actions) {
    switch (action.type) {
        case employeeActions.LOAD_EMPLOYEES: {
            return {
                ...state,
                employees: action.payload
            };
        }
        case employeeActions.ADD_EMPLOYEE: {
            return {
                ...state,
                employees: [action.payload, ...state.employees]
            };
        }
        case employeeActions.EDIT_EMPLOYEE: {
            return {
                ...state,
                employees: state.employees.map(employee => {
                    return employee.id === action.payload.id
                        ? Object.assign({}, employee, { value: action.payload })
                        : employee;
                })
            }
        }
        case employeeActions.DELETE_EMPLOYEE: {
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload)
            };
        }
        default: {
            return state;
        }
    }
}
