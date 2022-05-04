// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux toolkit
import store from './store';
import { Provider } from 'react-redux';

// ReactDOM
ReactDOM.render(
	<React.StrictMode>
		<Provider store={ store }>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);