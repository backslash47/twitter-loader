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

// CHILD COMPONENTS

// OTHERS

/** ==========================================   COMPONENT INTERFACE   ========================================= **/

class Header extends Component {

    static propTypes = {
        loadTweetsRequest: PropTypes.func
    };

    // COMPONENT LIFECYCLE ===========================================================================================

    componentWillMount() {
    }

    componentDidMount() {
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

    onLoadButtonClicked(){
        const username = this.refs.usernameInput.value;
        this.props.loadTweetsRequest(username);
    }

    // RENDER ========================================================================================================

    render() {
        return (
            <div className="header">
                <label>@</label>
                <input type="text" placeholder="username" ref="usernameInput"/>
                <button className="load-button" onClick={this.onLoadButtonClicked}>LOAD TWEETS</button>
            </div>
        );
    }
}

const Wired = Autobind(Header);
const Connected = connect()(Wired);
export default Connected;
