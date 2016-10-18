import {Types as Actions} from '../actions/MainActions';
import { handleActions } from 'redux-actions';

const DEFAULT_STATE = {
    value: 'Unknown User'
};

const TextReducer = handleActions({

    [Actions.INCREMENT]: (state, action) => {
        return {
            value: action.payload.msg
        }
    },

    [Actions.DECREMENT]: (state, action) => {
        return {
            value: action.payload.msg
        }
    }

}, DEFAULT_STATE);

export default TextReducer;