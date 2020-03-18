import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import { updateMachine } from '../actions'
import { bindActionCreators } from 'redux';
/* eslint-disable react/prop-types */
class Machine extends Component {

    state = {
        id: this.props.match.params.id,
        new_name: ''
    };
    updateMachineName = (e, itemname, id) => {
        this.props.updateMachine(id, {name:itemname});
    };

    render () {
        const {machine: item} = this.props;
        return (
            <Fragment>
            { item && 
            <div key={item.id}>
                <div className="floatLeft">
                    <div className="machine_name">{item.name}</div>
                    <h4>Update Device</h4>
                    <h5>Name:</h5>
                    <input placeholder={item.name} onChange={e => this.setState({new_name: e.target.value})}></input>
                    <button onClick={e => this.updateMachineName(e, this.state.new_name, item.id)}>Update</button>
                </div>

                <div className="floatLeft">
                    <progress max="100" value={item.health}></progress>
                    <h5>Stats</h5>
                    <div className="ip_address">{item.ip_address}</div>
                </div>
            </div>
            }
            </Fragment>
        );
    }
}
const mapStateToProps = (state, props) => ({
    machine: state.machine.item.find(m => m.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
    updateMachine: dispatch(updateMachine)
})
/* eslint-enable react/prop-types */
export default connect(mapStateToProps, mapDispatchToProps)(Machine);

