/**
 * Project:     Untitled Project
 * Author:      Jake
 * Copyright:   © 2016
 */

// REACT & 3rd PARTY MODULES
import React, {Component, PropTypes} from 'react';
import Autobind from 'autobind-decorator';
import { connect } from 'react-redux';

// CONTROLLERS
import * as ApiActions from '../domain/actions/ApiActions';

// CHILD COMPONENTS
import Header from './Header';

// OTHERS

/** ==========================================   COMPONENT INTERFACE   ========================================= **/

const stateMap = (state) => {
    return {
        api: state.api
    }
};

const actionMap = (dispatch) => {
    return {
        authenticate: () => {
            dispatch(ApiActions.authenticate());
        },
        loadTweets: (...args) => {
            dispatch(ApiActions.loadTweets(...args));
        },
    }
};

class HomePage extends Component {

    static propTypes = {
        token: PropTypes.string,
        authenticate: PropTypes.func,
        loadTweets: PropTypes.func
    };

    // COMPONENT LIFECYCLE ===========================================================================================

    componentWillMount() {
    }

    componentDidMount() {
        this.props.authenticate();
    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate() {
    }

    // PUBLIC METHODS ================================================================================================

    // PRIVATE METHODS ===============================================================================================

    onLoadTweetsRequest(username){
        this.props.loadTweets(this.props.api.token, username);
    }

    // RENDER ========================================================================================================

    render() {
        console.log(this.props);
        return (
            <div className="home-page">
                <Header loadTweetsRequest={this.onLoadTweetsRequest}/>
            </div>
        );
    }
}

const Wired = Autobind(HomePage);
const Connected = connect(stateMap, actionMap)(Wired);
export default Connected;
