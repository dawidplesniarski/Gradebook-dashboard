import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { universityReducer} from './universityReducer';

export const rootReducer = combineReducers({
    loginReducer,
    universityReducer
});

