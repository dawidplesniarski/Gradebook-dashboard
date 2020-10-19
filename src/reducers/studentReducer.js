export const FETCH_START = 'FETCH_START';
export const SET_STUDENT_INFO = 'SET_STUDENT_INFO';
export const SET_STUDENT_INFO_ERROR = 'SET_STUDENT_INFO_ERROR';
export const SET_STUDENT_GRADES = 'SET_STUDENT_GRADES';
export const SET_STUDENT_GRADES_ERROR = 'SET_STUDENT_GRADES_ERROR';
export const SET_CURRENT_STUDENT = 'SET_CURRENT_STUDENT';
export const SET_CURRENT_STUDENT_ERROR = 'SET_CURRENT_STUDENT_ERROR';
export const SET_CURRENT_STUDENT_ID = 'SET_CURRENT_STUDENT_ID';

const initialState = {
    isLoading: false,
    studentInfo: null,
    studentInfoError: null,
    studentGrades: [],
    currentStudent: null,
    currentStudentError: null,
    // currentStudentId: '5f738a7916bd0909c4d38a0d',
    currentStudentId: null,
    studentGradesError: null
};

export const studentReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            };
        case SET_STUDENT_INFO:
            return {
                ...state,
                isLoading: false,
                studentInfo: action.payload,
                studentInfoError: null
            };
        case SET_STUDENT_INFO_ERROR:
            return {
                ...state,
                isLoading: false,
                studentInfoError: action.payload,
                studentInfo: null
            };
        case SET_STUDENT_GRADES:
            return {
                ...state,
                isLoading: false,
                studentGrades: action.payload,
                studentGradesError: null
            };
        case SET_STUDENT_GRADES_ERROR:
            return{
                ...state,
                isLoading: false,
                studentGrades: null,
                studentGradesError: action.payload
            };
        case  SET_CURRENT_STUDENT:
            return {
                ...state,
                isLoading: false,
                currentStudent: action.payload,
                currentStudentError: null
            };
        case SET_CURRENT_STUDENT_ERROR:
            return {
                ...state,
                isLoading: false,
                currentStudent: null,
                currentStudentError: action.payload
            };
        case SET_CURRENT_STUDENT_ID:
            return {
                ...state,
                isLoading: false,
                currentStudentId: action.payload
            }
        default:
            return state;
    }
};