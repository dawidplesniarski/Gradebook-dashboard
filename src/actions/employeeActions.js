import {
    FETCH_START,
    SET_CURRENT_EMPLOYEE_ID,
    SET_CURRENT_EMPLOYEE,
    SET_ALL_EMPLOYEES_ERROR,
    SET_ALL_EMPLOYEES} from '../reducers/employeeReducer';
import axios from 'axios';
import {API_URL} from "../utils/helpers";

const fetchStart = () => {
    return {
      type: FETCH_START
    };
};

export const setCurrentEmployeeId = (employeeId) => {
    return {
        type: SET_CURRENT_EMPLOYEE_ID,
        payload: employeeId
    };
};

export const setCurrentEmployee = (employee) => {
    return {
        type: SET_CURRENT_EMPLOYEE,
        payload: employee
    };
};

export const setAllEmployees = (employees) => {
    return {
        type: SET_ALL_EMPLOYEES,
        payload: employees
    };
};

export const setAllEmployeesError = (error) => {
    return {
        type: SET_ALL_EMPLOYEES_ERROR,
        payload: error
    };
};

export const getAllEmployees = () => async dispatch => {
    dispatch(fetchStart());
    try {
        const {data} = await axios.get(`${API_URL}/employee/findAllEmployees`);
        dispatch(setAllEmployees(data));
    } catch (err) {
        dispatch(setAllEmployeesError(err));
    }
};