import axios from 'axios';
import {
    FETCH_START,
    SET_STUDENT_INFO,
    SET_STUDENT_INFO_ERROR,
    SET_STUDENT_GRADES,
    SET_STUDENT_GRADES_ERROR,
    SET_CURRENT_STUDENT
} from "../reducers/studentReducer";
import {API_URL} from "../utils/helpers";

const fetchStart = () => {
    return {
        type: FETCH_START
    };
};

const setStudentInfo = (studentInfo) => {
    return {
        type: SET_STUDENT_INFO,
        payload: studentInfo
    };
};

const setStudentInfoError = (error) => {
    return {
        type: SET_STUDENT_INFO_ERROR,
        payload: error
    };
};

const setStudentGrades = (grades) => {
    return {
        type: SET_STUDENT_GRADES,
        payload: grades
    };
};

const setStudentGradesError = (error) => {
    return {
        type: SET_STUDENT_GRADES_ERROR,
        payload: error
    };
};

export const setCurrentStudent = (student) => {
    return {
        type: SET_CURRENT_STUDENT,
        payload: student
    };
};