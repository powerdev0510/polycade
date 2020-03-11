import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch
} from "react-router-dom";

class Machines extends Component {
	state = {
		machines: [],
		machineId: 0
	};
	componentDidMount = () => {
		fetch('http://localhost:8080/machines')
		.then(res => res.json())
		.then((data) => {
			this.setState({machines: data});
		})
		.catch(console.log);
	}

	clickMachine = (id) => {
		this.setState({machineId: id});
	}
	render () {
		let machines = this.state.machines.map((machine, index) => {
				return (
					<tr key={machine.id}>
						<td><Link to={`/machine/${machine.id}`}>{machine.name}</Link></td>
						<td>{machine.ip_address}</td>
						<td>
							<progress max="100" value={machine.health}></progress>
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
export default Machines;
