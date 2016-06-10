import {
	applyMiddleware,
	createStore,
	combineReducers,
	compose,
} from 'redux';

import thunk from 'redux-thunk';
import world from 'state/world/reducer';

const reducer = combineReducers( {
	world,
} );

const middlewares = [
	thunk,
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

	return store;
}
