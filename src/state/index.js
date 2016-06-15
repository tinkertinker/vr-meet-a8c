import {
	applyMiddleware,
	createStore,
	combineReducers,
	compose,
} from 'redux';

import world from 'state/world/reducer';
import people from 'state/people/reducer';
import createSagaMiddleware from 'redux-saga';
import mySagas from './sagas';

const reducer = combineReducers( {
	world,
	people,
} );

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
	sagaMiddleware,
];

export default function createReduxStore( initialState = {} ) {
	const store = createStore(
		reducer,
		initialState,
		compose(
			applyMiddleware( ...middlewares ),
			process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);

	if ( module.hot ) {
		module.hot.accept( 'state', () => {
			const nextReducer = require( 'state/world/reducer' );
			store.replaceReducer( nextReducer );
		} );
	}

	sagaMiddleware.run( mySagas );
	return store;
}
