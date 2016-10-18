import { combineReducers } from 'redux';

import ApiReducer from './ApiReducer';
import DisplayReducer from './DisplayReducer';

const AppReducer = combineReducers({
    api: ApiReducer,
    display: DisplayReducer
});

export default AppReducer;
