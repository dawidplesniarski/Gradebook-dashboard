import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { universityReducer} from './universityReducer';
import { studentReducer } from './studentReducer';
import { employeeReducer } from "./employeeReducer";
import { subjectReducer } from "./subjectReducer";
import { courseReducer } from "./coursesReducer";

export const rootReducer = combineReducers({
    loginReducer,
    universityReducer,
    studentReducer,
    employeeReducer,
    subjectReducer,
    courseReducer
});