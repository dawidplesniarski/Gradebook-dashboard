import axios from 'axios';
import{
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_LOGOUT,
    SET_LOGGED
} from '../reducers/loginReducer';

const loginStart = () => {
    return{
        type: LOGIN_START
    };
};

const loginSuccess = data => {
    localStorage.setItem('token', data.token);
    return{
        type: LOGIN_SUCCESS,
        payload: data
    };
};

const loginFailed = error => {
    return{
        type: LOGIN_ERROR,
        payload: error
    }
}

const setLogged = (isLogged) => {
    return {
        type: SET_LOGGED,
        payload: isLogged
    }
}

const logout = () => {
    return{
        type: LOGIN_LOGOUT,
    }
}

export const authCheck = (successCallback, errorCallback) => async dispatch => {
    dispatch(loginStart());
    const token = localStorage.getItem('token');
    if(token) {
        successCallback();
        dispatch(setLogged(true));
    } else {
        errorCallback();
    }
}

export const loginFunction = (login, password, successCallback) => async dispatch => {
    dispatch(loginStart());
    try{
        const { data } = await axios.post('https://node-app-4fun.herokuapp.com/employee/login',{login, password});
        dispatch(loginSuccess(data));
        successCallback();
    }catch(error){
        console.log(error);
        dispatch(loginFailed(error));
    }
}

export const logoutFunction = (successCallback) => async dispatch => {
    try{
        dispatch(logout());
        successCallback();
    }catch(err){
        console.log('Failed when trying to logout');
    }
}