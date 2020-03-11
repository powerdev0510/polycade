import React from 'react';

export default function Machines () {
	return (
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
					<tr>
						<td>Machine 1</td>
						<td>192.98.11.10</td>
						<td>Progress Bar</td>
					</tr>
					<tr>
						<td>Machine 2</td>
						<td>192.98.11.10</td>
						<td>Progress Bar</td>
					</tr>
					<tr>
						<td>Machine 3</td>
						<td>192.98.11.10</td>
						<td>Progress Bar</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
