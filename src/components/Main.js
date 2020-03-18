import React, { Component }from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import Machines from './Machines';
import Machine from './Machine';
import '../App.css';
import { fetchMachines } from '../actions/fetchMachines';
import { connect } from 'react-redux';

/* eslint-disable react/prop-types */

class Main extends Component {
	componentDidMount = () => {
		this.props.dispatch(fetchMachines());
	}
	render() {
		return (
			<Router>
				<header className='App-header'>
					<img alt='logo' height='272' width='800' src='https://i.imgur.com/jcvsFKh.png' />
				</header>

				<nav className='App-nav'>
					<Link to='/'>Home</Link>
					<Link to='/machines'>Machines</Link>
				</nav>

				<Switch>
					<Route path='/machines'>
						<Machines />
					</Route>
					<Route path='/machine/:id' component={Machine} />
				</Switch>
			</Router>
		);
	}
}
const mapStateToProps = state => ({
	item: state.Machine.item,
});
export default connect(mapStateToProps)(Main);

/* eslint-enable react/prop-types */
