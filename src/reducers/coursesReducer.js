export const FETCH_START = 'FETCH_START';
export const SET_ALL_COURSES = 'SET_ALL_COURSES';
export const SET_ALL_COURSES_ERROR = 'SET_ALL_COURSES_ERROR';
export const SET_CURRENT_COURSE = 'SET_CURRENT_COURSE';
export const SET_CURRENT_COURSE_ERROR = 'SET_CURRENT_COURSE_ERROR';
export const SET_CURRENT_COURSE_ID = 'SET_CURRENT_COURSE_ID';
export const RESET_CURRENT_COURSE = 'RESET_CURRENT_COURSE';

const initialState = {
  isLoading: false,
  courses: [],
  coursesError: null,
  currentCourse: null,
  currentCourseError: null,
  currentCourseId: null,
};

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            };
        case SET_ALL_COURSES:
            return {
                ...state,
                isLoading: false,
                courses: action.payload,
            };
        case SET_ALL_COURSES_ERROR:
            return {
                ...state,
                isLoading: false,
                courses: [],
                coursesError: action.payload
            };
        case SET_CURRENT_COURSE:
            return {
                ...state,
                isLoading: false,
                currentCourse: action.payload,
                currentCourseError: null
            };
        case SET_CURRENT_COURSE_ERROR:
            return {
                ...state,
                isLoading: false,
                currentCourseError: action.payload,
                currentCourse: null
            };
        case RESET_CURRENT_COURSE:
            return {
                ...state,
                currentCourse: null
            };
        case SET_CURRENT_COURSE_ID:
            return {
                ...state,
                isLoading: false,
                currentCourseId: action.payload
            }
        default:
            return state;
    }
};