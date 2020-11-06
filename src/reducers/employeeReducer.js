export const FETCH_START = 'FETCH_START';
export const SET_CURRENT_EMPLOYEE = 'SET_CURRENT_EMPLOYEE';
export const SET_CURRENT_EMPLOYEE_ID = 'SET_CURRENT_EMPLOYEE_ID';
export const SET_ALL_EMPLOYEES = 'SET_ALL_EMPLOYEES';
export const SET_ALL_EMPLOYEES_ERROR = 'SET_ALL_EMPLOYEES_ERROR';

const initialState = {
    isLoading: false,
    allEmployees: [],
    allEmployeesError: null,
    currentEmployee: null,
    currentEmployeeId: null
};

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            };
        case SET_CURRENT_EMPLOYEE:
            return {
                ...state,
                isLoading: false,
                currentEmployee: action.payload
            };
        case SET_ALL_EMPLOYEES:
            return {
                ...state,
                isLoading: false,
                allEmployees: action.payload
            };
        case SET_ALL_EMPLOYEES_ERROR:
            return {
                ...state,
                isLoading: false,
                allEmployeesError: action.payload
            };
        case SET_CURRENT_EMPLOYEE_ID:
            return {
                ...state,
                isLoading: false,
                currentEmployeeId: action.payload
            };
        default:
            return state;
    }
};