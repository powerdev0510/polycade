import React, { Component } from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch
} from 'react-router-dom';
import { connect } from 'react-redux';
/* eslint-disable react/prop-types */

class Machines extends Component {
	
	render () {
		const { machine } = this.props;
		const machines = machine.map((item, index) => {
				return (
					<tr key={item.id}>
						<td><Link to={`/machine/${item.id}`}>{item.name}</Link></td>
						<td>{item.ip_address}</td>
						<td>
							<progress max="100" value={item.health}></progress>
						</td>
					</tr>
				);
			}
		);
		return (
			<div>
				<div id="machine_table">
					<table>
						<thead>
							<tr>
								<td>Name</td>
								<td>IP Address</td>
								<td>Health</td>
							</tr>
						</thead>
						<tbody>
							{machines}
						</tbody>
					</table>
				</div>
			</div>
		);
		
	}
}

const mapStateToProps = state => ({
	machine: state.machine.item,
});
/* eslint-enable react/prop-types */

export default connect(mapStateToProps)(Machines);
