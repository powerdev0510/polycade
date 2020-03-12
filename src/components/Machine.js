import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';

/* eslint-disable react/prop-types */
class Machine extends Component {
    constructor (props) {
        super(props);
        console.log(props.match.params.id);
        this.state = {
            id: null
        };
    }
    componentDidMount = () => {
    }
    render () {
        return (
            <div>
            </div>
        );
    }
}

/* eslint-enable react/prop-types */
export default Machine;
