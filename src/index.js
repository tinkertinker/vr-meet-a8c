import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createReduxStore from 'state';
import createRoutes from './routes';
import initialState from './state/initial.json';
import setup from './aframe-setup';
import './index.scss';

setup();

render(
	<Provider store={ createReduxStore( initialState ) }>
		{ createRoutes() }
	</Provider>,

	document.getElementById( 'app' )
);
