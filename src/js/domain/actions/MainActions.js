
export const Types = {
    INCREMENT : 'INCREMENT',
    DECREMENT : 'DECREMENT'
};

export const increment = () => {
    return {
        type: Types.INCREMENT,
        payload: {
            msg: 'Jake'
        }
    };
};

export const decrement = () => {
    return {
        type: Types.DECREMENT,
        payload: {
            msg: 'Daniels'
        }
    };
};

//export const increment = () => {
//    return (dispatch) => {
//        dispatch({
//            type: Types.INCREMENT,
//            payload: {
//                msg: 'Jake'
//            }
//        });
//    }
//};
//
//export const decrement = () => {
//    return (dispatch) => {
//        dispatch({
//            type: Types.DECREMENT,
//            payload: {
//                msg: 'Daniels'
//            }
//        });
//    }
//};