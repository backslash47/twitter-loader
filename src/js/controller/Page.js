/**
 * Project:     Untitled Project
 * Author:      Jake
 * Copyright:   © 2016
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as MainActions from '../domain/actions/MainActions';
import Component from '../view/Component';

const stateMap = (state) => {
    return {
        shownNumber: state.number.value,
        shownUser: state.text.value
    }
};

const actionMap = (dispatch) => {
    return {
        incrementClicked: () => {
            dispatch(MainActions.increment());
        },
        decrementClicked: () => {
            dispatch(MainActions.decrement());
        }
    }
};

const Page = connect(stateMap, actionMap)(Component);
export default Page;