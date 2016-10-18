/**
 * Project:     Untitled Project
 * Author:      Jake
 * Copyright:   © 2016
 */

// REACT & 3rd PARTY MODULES
import React from 'react';
import ReactDOM from 'react-dom';
import Autobind from 'autobind-decorator';

// CONTROLLERS

// CHILD COMPONENTS

// OTHERS

/** ==========================================   COMPONENT DESCRIPTION   ========================================= **/

class Component extends React.Component {

    // COMPONENT INTERFACE & STATE ===================================================================================

    // Data types of properties.
    static propTypes = {};

    // Default values of properties.
    static defaultProps = {};

    // COMPONENT LIFECYCLE ===========================================================================================

    constructor(props) {
        super(props);
}

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

    // RENDER ========================================================================================================

    render() {
        console.log('RENDER', this.props);
        return (
            <div className="component">
                <button onClick={this.props.incrementClicked}>Increment</button>
                <button onClick={this.props.decrementClicked}>Decrement</button>
                <h1>{this.props.shownNumber}</h1>
                <h2>User: {this.props.shownUser}</h2>
            </div>
        );
    }
}

export default Autobind(Component);
