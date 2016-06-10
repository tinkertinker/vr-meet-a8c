import {
	WORLD_SET_FOCUS,
	WORLD_SELECT,
} from './types';

export default function world( state = {}, action ) {
	switch ( action.type ) {
		case WORLD_SET_FOCUS:
			return Object.assign( {}, state, { worldFocus: action.position} );

		case WORLD_SELECT:
			return Object.assign( {}, state, { worldFocus: -1, currentWorld: action.position } );
	}

	return state;
}
