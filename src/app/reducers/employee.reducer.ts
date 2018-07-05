import * as employeeActions from './../actions/employee.actions';
import { AppState } from '../models/app-state';

const initialState: AppState = {
    employees: []
};

export function employeeReducer(state = initialState, action: employeeActions.Actions) {
    switch (action.type) {
        case employeeActions.LOAD_EMPLOYEES: {
            return state = {
                employees: action.payload
            };
        }
        case employeeActions.ADD_EMPLOYEE: {
            return {
                ...state,
                // employees: [action.payload, ...state.employees]
                employees: [...state.employees, action.payload]
            };
        }
        case employeeActions.EDIT_EMPLOYEE: {
            return action.payload;
        }
        case employeeActions.DELETE_EMPLOYEE: {
            return state = {
                employees: state.employees.filter(employee => employee.id !== action.payload)
            };
        }
        default: {
            return state;
        }

    }
}
