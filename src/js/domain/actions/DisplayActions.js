

export const Types = {
    AUTHENTICATE_REQUEST : 'AUTHENTICATE_REQUEST',
    AUTHENTICATE_RECEIVE : 'AUTHENTICATE_RECEIVE',
    AUTHENTICATE_ERROR : 'AUTHENTICATE_ERROR'
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

