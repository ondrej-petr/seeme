import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		return (
			<div className="frame">
				<h3 className="bit-40">Test</h3>
				<ul className="bit-60 nav_menu">
					<li key={100}><Link to="dashboard">Dashboard</Link></li>
					<li key={101}><Link to="login">Login</Link></li>
				</ul>
			</div>
		);
	}
}
