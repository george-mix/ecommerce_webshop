import { combineReducers } from 'redux';
import test from './testReducer';

const rootReducer = combineReducers({
    test: test
});

export default rootReducer;