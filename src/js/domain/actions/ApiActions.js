import MainConnector from '../api/MainConnector';

export const Types = {

    AUTHENTICATE_REQUEST : 'AUTHENTICATE_REQUEST',
    AUTHENTICATE_RECEIVE : 'AUTHENTICATE_RECEIVE',
    AUTHENTICATE_ERROR : 'AUTHENTICATE_ERROR',

    LOAD_TWEETS_REQUEST : 'LOAD_TWEETS_REQUEST',
    LOAD_TWEETS_RECEIVE : 'LOAD_TWEETS_RECEIVE',
    LOAD_TWEETS_ERROR : 'LOAD_TWEETS_ERROR'

};

const requestAuth = () => {
    return {
        type: Types.AUTHENTICATE_REQUEST,
        payload: {
            isLoading: true,
            isLoaded: false
        }
    };
};

const receiveAuth = (token) => {
    return {
        type: Types.AUTHENTICATE_RECEIVE,
        payload: {
            isLoading: false,
            isLoaded: true,
            lastUpdate: Date.now(),
            token: token
        }
    };
};

const errorAuth = (error) => {
    return {
        type: Types.AUTHENTICATE_ERROR,
        payload: error,
        error: true
    };
};

export const authenticate = () => {
    return (dispatch) => {

        dispatch(requestAuth);

        MainConnector.authenticate().then(
            (response) => {
                dispatch(receiveAuth(response.access_token));
            },
            (error) => {
                dispatch(errorAuth(error));
            }
        );

    };
};

const requestTweets = () => {
    return {
        type: Types.LOAD_TWEETS_REQUEST,
        payload: {
            isLoading: true,
            isLoaded: false
        }
    };
};

const receiveTweets = (tweets) => {
    return {
        type: Types.LOAD_TWEETS_RECEIVE,
        payload: {
            isLoading: false,
            isLoaded: true,
            lastUpdate: Date.now(),
            tweets: tweets
        }
    };
};

const errorTweets = (error) => {
    return {
        type: Types.LOAD_TWEETS_ERROR,
        payload: error,
        error: true
    };
};

export const loadTweets = (token, username) => {
    return (dispatch) => {

        dispatch(requestTweets);

        MainConnector.loadTweets(token, username).then(
            (response) => {
                dispatch(receiveTweets(response));
            },
            (error) => {
                dispatch(errorTweets(error));
            }
        );

    };
};