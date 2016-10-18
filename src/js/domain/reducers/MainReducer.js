import { combineReducers } from 'redux';
import NumberReducer from './NumberReducer';
import TextReducer from './TextReducer';

const MainReducer = combineReducers({
    number: NumberReducer,
    text: TextReducer
});

export default MainReducer;
