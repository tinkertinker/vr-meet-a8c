import {
	applyMiddleware,
	createStore,
	combineReducers,
	compose,
} from 'redux';
import {
	WORLD_SET_FOCUS,
	WORLD_SELECT,
} from './types';
import thunk from 'redux-thunk';

function world( state = {}, action ) {
	switch ( action.type ) {
		case WORLD_SET_FOCUS:
			return Object.assign( {}, state, { worldFocus: action.position} );

		case WORLD_SELECT:
			return Object.assign( {}, state, { worldFocus: -1, currentWorld: action.position } );
	}

	return state;
}

function vrMode( state = {}, action ) {
	return state;
}

const reducer = combineReducers( {
	world,
	vrMode,
} );

const middlewares = [
	thunk,
];

export function createReduxStore( initialState = {} ) {
	return createStore(
		reducer,
		initialState,
		compose(
			applyMiddleware( ...middlewares ),
			process.env.NODE_ENV === 'development' && typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);
}
