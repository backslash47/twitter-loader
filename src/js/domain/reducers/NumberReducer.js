import {Types as Actions} from '../actions/MainActions';
import { handleActions } from 'redux-actions';

const DEFAULT_STATE = {
    value: 0
};

const NumberReducer = handleActions({

    [Actions.INCREMENT]: (state, action) => {
        return {
            value: (state.value + 1)
        }
    },

    [Actions.DECREMENT]: (state, action) => {
        return {
            value: (state.value - 1)
        }
    }

}, DEFAULT_STATE);

export default NumberReducer;