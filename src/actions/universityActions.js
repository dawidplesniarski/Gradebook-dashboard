import axios from 'axios';
import {
    FETCH_START,
    SET_UNIVERSITIES,
    UNIVERSITIES_ERROR,
    SET_UNIVERSITY_STUDENTS,
    UNIVERSITY_STUDENTS_ERROR,
    SET_CURRENT_UNIVERSITY,
    SET_CURRENT_COURSE,
    SET_CURRENT_UNIVERSITY_ID,
    RESET_CURRENT_UNIVERSITY,
    SET_CURRENT_UNIVERSITY_ERROR
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

const resetCurrentUniversity = () => {
    return {
        type: RESET_CURRENT_UNIVERSITY
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

export const setCurrentUniversity = (university) => {
    return {
        type: SET_CURRENT_UNIVERSITY,
        payload: university
    };
};

const setCurrentUniversityError = (error) => {
    return {
        type: SET_CURRENT_UNIVERSITY_ERROR,
        payload: error
    };
};

export const setCurrentUniversityId = (id) => {
    return {
        type: SET_CURRENT_UNIVERSITY_ID,
        payload: id
    }
}

export const setCourseCurrent = (course) => {
    return {
        type: SET_CURRENT_COURSE,
        payload: course
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

export const getCurrentUniversity = (id) => async dispatch => {
    dispatch(fetchStart());
    dispatch(resetCurrentUniversity());
    try {
        const {data} = await axios.get(`${API_URL}/university/findById/${id}`);
        dispatch(setCurrentUniversity(data));
    } catch (err) {
        dispatch(setCurrentUniversityError(err));
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