import * as employeeActions from './../actions/employee.actions'

export function employeeReducer(state = [], action: employeeActions.Action){
    switch(action.type){
        case employeeActions.LOAD_EMPLOYEES_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }

    }
}
