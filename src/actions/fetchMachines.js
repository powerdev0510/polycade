import { fetchMachinesSuccess } from './index';

export function fetchMachines() {
	return dispatch => {
		fetch('http://localhost:8080/machines')
			.then(res => res.json())
			.then((data) => {
				dispatch(fetchMachinesSuccess(data));
			})
			.catch(console.log);
	};
}