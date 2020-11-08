import axios from 'axios';
import {
    FETCH_START,
    SET_CURRENT_SUBJECT_ID,
    SET_CURRENT_SUBJECT_ERROR,
    SET_CURRENT_SUBJECT,
    SET_ALL_SUBJECTS_ERROR,
    SET_ALL_SUBJECTS,
    RESET_CURRENT_SUBJECT
} from "../reducers/subjectReducer";
import {API_URL} from "../utils/helpers";

const fetchStart = () => {
    return {
        type: FETCH_START
    };
};

const setAllSubjects = (subjects) => {
    return {
        type: SET_ALL_SUBJECTS,
        payload: subjects
    };
};

const setAllSubjectsError = (error) => {
    return {
        type: SET_ALL_SUBJECTS_ERROR,
        payload: error
    };
};

const setCurrentSubject = (subject) => {
    return {
        type: SET_CURRENT_SUBJECT,
        payload: subject
    };
};

const setCurrentSubjectError = (error) => {
    return {
        type: SET_CURRENT_SUBJECT_ERROR,
        payload: error
    };
};

const resetCurrentSubject = () => {
    return {
        type: RESET_CURRENT_SUBJECT
    };
};

export const setCurrentSubjectId = (id) => {
    return {
        type: SET_CURRENT_SUBJECT_ID,
        payload: id
    };
};

export const getSubjects = () => async dispatch => {
    dispatch(fetchStart());
    try {
        const {data} = await axios.get(`${API_URL}/subject/findAll`);
        dispatch(resetCurrentSubject());
        dispatch(setAllSubjects(data));
    } catch(err) {
        dispatch(setAllSubjectsError(err));
    }
};

export const getCurrentSubject = (id) => async dispatch => {
    dispatch(fetchStart());
    dispatch(resetCurrentSubject());
    try {
        const {data} = await axios.get(`${API_URL}/subject/findById/${id}`);
        dispatch(setCurrentSubject(data));
    } catch (err) {
        dispatch(setCurrentSubjectError(err));
    }
};