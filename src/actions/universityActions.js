import axios from 'axios';
import {
    FETCH_START,
    SET_UNIVERSITIES,
    UNIVERSITIES_ERROR,
    SET_UNIVERSITY_STUDENTS,
    UNIVERSITY_STUDENTS_ERROR,
    SET_CURRENT_UNIVERSITY
} from "../reducers/universityReducer";
import {API_URL} from "../utils/helpers";

const fetchStart = () => {
    return {
        type: FETCH_START
    };
};

const setUniversitiesSuccess = (universities) => {
    return {
        type: SET_UNIVERSITIES,
        payload: universities
    };
};

const setUniversitiesError = (error) => {
    return {
        type: UNIVERSITIES_ERROR,
        payload: error
    };
};

const setUniversityStudents = (students) => {
    return {
        type: SET_UNIVERSITY_STUDENTS,
        payload: students
    };
};

const setUniversityStudentsError = (error) => {
    return {
        type: UNIVERSITY_STUDENTS_ERROR,
        payload: error
    };
};

const setCurrentUniversity = (university) => {
    return {
        type: SET_CURRENT_UNIVERSITY,
        payload: university
    };
};

export const getUniversities = () => async dispatch => {
    dispatch(fetchStart());

    try {
        const {data} = await axios.get(`${API_URL}/university/findAll`);
        dispatch(setCurrentUniversity(null));
        dispatch(setUniversitiesSuccess(data));
    } catch (err) {
        dispatch(setUniversitiesError(err));
    }
};

export const getUniversityStudents = (universityName) => async dispatch => {
    dispatch(fetchStart());

    try {
        const {data} = await axios.get(`${API_URL}/users/findByUniversity/${universityName}`);
        dispatch(setUniversityStudents(data));
    } catch (err) {
        dispatch(setUniversityStudentsError(err));
    }
};