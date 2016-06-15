import {
	WORLD_SET_FOCUS,
	WORLD_SELECT,
	WORLD_VIEW_GLOBE,
} from './types';

export default function world( state = {}, action ) {
	switch ( action.type ) {
		case WORLD_SET_FOCUS:
			return Object.assign( {}, state, { worldFocus: action.position} );

		case WORLD_SELECT:
			return Object.assign( {}, state, { view: action.view, worldFocus: -1, currentWorld: action.position } );

		case WORLD_VIEW_GLOBE:
			return Object.assign( {}, state, { view: 'globe', world: action.world } );
	}

	return state;
}
