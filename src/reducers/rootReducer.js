import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { universityReducer} from './universityReducer';
import { studentReducer } from './studentReducer';

export const rootReducer = combineReducers({
    loginReducer,
    universityReducer,
    studentReducer
});