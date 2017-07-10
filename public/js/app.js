import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';

import Navigation from './components/navigation';
import Index from "./components/index";
import List from "./components/list";

const app = document.getElementById('app');

ReactDOM.render(
	<Router>
		<div>
			<Navigation />

			<Route path="/" component={Index} />
			<Route path="/list" component={List} />
		</div>
	</Router>, 
app);
