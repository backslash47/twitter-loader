import React, { Component } from 'react';
import Autobind from 'autobind-decorator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainReducer from './reducers/MainReducer';
import Page from '../controller/Page';

import './Styles';

class App extends Component {

    constructor(){
        super();
        this.Store = createStore(MainReducer);
    }

    Store = null;

    render() {
        return (
            <Provider store={this.Store}>
                <Page ahoj={22}/>
            </Provider>
        );
    }
}

export default Autobind(App);