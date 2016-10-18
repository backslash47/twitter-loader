import React, { Component } from 'react';
import Autobind from 'autobind-decorator';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import AppReducer from './reducers/AppReducer';
import HomePage from '../view/HomePage';

import './Styles';

class App extends Component {

    constructor(){
        super();
        let Thunk = applyMiddleware(thunk);
        this.Store = createStore(AppReducer, Thunk);
    }

    Store = null;

    render() {
        return (
            <Provider store={this.Store}>
                <HomePage/>
            </Provider>
        );
    }
}

export default Autobind(App);