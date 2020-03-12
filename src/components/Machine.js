import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import { getById, updateMachine } from '../actions'
/* eslint-disable react/prop-types */
class Machine extends Component {
    constructor (props) {
        super(props);
        console.log(props.match.params.id);
        this.state = {
            id: props.match.params.id,
            new_name: '',
        };
    }
    updateMachine = (e, itemname, id) => {
        this.props.dispatch(updateMachine(id, itemname));
    };

    componentDidMount = () => {
        this.props.dispatch(getById(this.state.id))
    }
    render () {
        const { machine, index } = this.props;
        const machines = machine.map((item, i) => {
            if(i === index){
                return (
                    <div key={item.id}>
                        <div className="floatLeft">
                            <div className="machine_name">{item.name}</div>
                            <h4>Update Device</h4>
                            <h5>Name:</h5>
                            <input placeholder={item.name} onChange={e => this.setState({new_name: e.target.value})}></input>
                            <button onClick={e => this.updateMachine(e, this.state.new_name, item.id)}>Update</button>
                        </div>

                        <div className="floatLeft">
                            <progress max="100" value={item.health}></progress>
                            <h5>Stats</h5>
                            <div className="ip_address">{item.ip_address}</div>
                        </div>
                    </div>
                );
            }
        });
        return (
            <div>
                {machines}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    machine: state.Machine.item,
    index: state.Machine.index
});
/* eslint-enable react/prop-types */
export default connect(mapStateToProps)(Machine);
