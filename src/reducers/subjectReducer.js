export const FETCH_START = 'FETCH_START';
export const SET_ALL_SUBJECTS = 'SET_ALL_SUBJECTS';
export const SET_ALL_SUBJECTS_ERROR = 'SET_ALL_SUBJECTS_ERROR';
export const SET_CURRENT_SUBJECT = 'SET_CURRENT_SUBJECT';
export const SET_CURRENT_SUBJECT_ERROR = 'SET_CURRENT_SUBJECT_ERROR';
export const SET_CURRENT_SUBJECT_ID = 'SET_CURRENT_SUBJECT_ID';
export const RESET_CURRENT_SUBJECT = 'RESET_CURRENT_SUBJECT';

const initialState = {
    isLoading: false,
    subjects: [],
    subjectsError: null,
    currentSubject: null,
    currentSubjectError: null,
    currentSubjectId: null
};

export const subjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            };
        case SET_ALL_SUBJECTS:
            return {
                ...state,
                isLoading: false,
                subjects: action.payload,
                subjectsError: null
            };
        case SET_ALL_SUBJECTS_ERROR:
            return {
                ...state,
                isLoading: false,
                subjects: [],
                subjectsError: action.payload
            };
        case SET_CURRENT_SUBJECT:
            return {
                ...state,
                isLoading: false,
                currentSubject: action.payload,
                currentSubjectError: null
            };
        case SET_CURRENT_SUBJECT_ERROR:
            return {
                ...state,
                isLoading: false,
                currentSubjectError: action.payload,
                currentSubject: null
            };
        case RESET_CURRENT_SUBJECT:
            return {
                ...state,
                currentSubject: null
            };
        case SET_CURRENT_SUBJECT_ID:
            return {
                ...state,
                isLoading: false,
                currentSubjectId: action.payload
            }
        default:
            return state;
    }
};