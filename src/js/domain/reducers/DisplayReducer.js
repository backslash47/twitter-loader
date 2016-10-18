import {Types as Actions} from '../actions/DisplayActions';
import { handleActions } from 'redux-actions';

const DEFAULT_STATE = {
    sort: null,
    order: null,
    filter: null,
    shownTweets: [],
};

const DisplayReducer = handleActions({

    [Actions.LOAD_TWEETS_REQUEST]: (state, action) => {
        return {
            isLoading: action.payload.isLoading,
            isLoaded: action.payload.isLoaded
        }
    },

}, DEFAULT_STATE);

export default DisplayReducer;