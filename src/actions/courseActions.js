import axios from 'axios';
import {
    FETCH_START,
    SET_CURRENT_COURSE_ID,
    SET_CURRENT_COURSE,
    SET_ALL_COURSES_ERROR,
    SET_ALL_COURSES,
    RESET_CURRENT_COURSE,
    SET_CURRENT_COURSE_ERROR
} from "../reducers/coursesReducer";
import {API_URL} from "../utils/helpers";

const fetchStart = () => {
    return {
        type: FETCH_START
    };
};

const setAllCourses = (courses) => {
    return {
        type: SET_ALL_COURSES,
        payload: courses
    };
};

const setAllCoursesError = (error) => {
    return {
        type: SET_ALL_COURSES_ERROR,
        payload: error
    };
};

const setCurrentCourse = (course) => {
    return {
        type: SET_CURRENT_COURSE,
        payload: course
    };
};

const setCurrentCourseError = (error) => {
    return {
        type: SET_CURRENT_COURSE_ERROR,
        payload: error
    };
};

const resetCurrentCourse = () => {
    return {
        type: RESET_CURRENT_COURSE
    };
};

export const setCurrentCourseId = (id) => {
    return {
        type: SET_CURRENT_COURSE_ID,
        payload: id
    };
};

export const getCourses = () => async dispatch => {
    dispatch(fetchStart());
    dispatch(resetCurrentCourse());
    try {
        const {data} = await axios.get(`${API_URL}/course/findAll`);
        dispatch(setAllCourses(data));
    } catch (err) {
        dispatch(setAllCoursesError(err));
    }
};

export const getCurrentCourse = (id) => async dispatch => {
    dispatch(fetchStart());
    dispatch(resetCurrentCourse());
    try {
        const {data} = await axios.get(`${API_URL}/course/findById/${id}`);
        dispatch(setCurrentCourse(data));
    } catch (err) {
        dispatch(setCurrentCourseError(err));
    }
};