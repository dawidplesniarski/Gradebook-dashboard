import axios from 'axios';
import {
    FETCH_START,
    SET_STUDENT_INFO,
    SET_STUDENT_INFO_ERROR,
    SET_STUDENT_GRADES,
    SET_STUDENT_GRADES_ERROR,
    SET_CURRENT_STUDENT,
    SET_CURRENT_STUDENT_ERROR,
    SET_CURRENT_STUDENT_ID,
    SET_CURRENT_STUDENT_SUBJECTS,
    SET_CURRENT_SEMESTER
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

const setCurrentStudent = (student) => {
    return {
        type: SET_CURRENT_STUDENT,
        payload: student
    }
};

const setCurrentStudentError = (studentError) => {
    return {
        type: SET_CURRENT_STUDENT_ERROR,
        payload: studentError
    }
}

export const setCurrentStudentSubjects = (studentSubjects) => {
    return {
        type: SET_CURRENT_STUDENT_SUBJECTS,
        payload: studentSubjects
    }
}

export const setCurrentStudentId = (studentId) => {
    return {
        type: SET_CURRENT_STUDENT_ID,
        payload: studentId
    };
};

export const setCurrentSemester = (semester) => {
  return {
      type: SET_CURRENT_SEMESTER,
      payload: semester
  }
};

export const getCurrentStudent = (studentId) => async dispatch => {
    dispatch(fetchStart());

    try {
        const { data } = await axios.get(`${API_URL}/users/findById/${studentId}`);
        dispatch(setCurrentStudent(data));
    } catch(err) {
        dispatch(setCurrentStudentError(err));
    }
};