import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createReduxStore } from './state'
import App from './components/App'
import './index.scss';

import initialState from './state/initial.json';

render(
	<Provider store={ createReduxStore( initialState ) }>
		<App />
	</Provider>,

	document.getElementById( 'app' )
);
