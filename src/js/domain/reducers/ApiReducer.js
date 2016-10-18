import {Types as Actions} from '../actions/ApiActions';
import { handleActions } from 'redux-actions';

const DEFAULT_STATE = {
    token: null,
    username: null,
    tweets: []
};

const ApiReducer = handleActions({

    [Actions.AUTHENTICATE_RECEIVE]: (state, action) => {
        return {
            token: action.payload.token
        }
    },

}, DEFAULT_STATE);

export default ApiReducer;