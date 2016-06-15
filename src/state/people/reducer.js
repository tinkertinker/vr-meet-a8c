import {
	PEOPLE_GET_ALL_SUCCESS,
	PEOPLE_GET_ALL_FAILED,
	PEOPLE_SHOW_VIDEO,
} from './types';
import {
	WORLD_SELECT,
} from 'state/world/types';

export default function world( state = {}, action ) {
	switch ( action.type ) {
		case PEOPLE_GET_ALL_SUCCESS:
			return Object.assign( {}, state, { status: 'loaded', list: action.users.slice( 0, 50 ) } );

		case PEOPLE_GET_ALL_FAILED:
			return Object.assign( {}, state, { status: 'failed' } );

		case PEOPLE_SHOW_VIDEO:
			return Object.assign( {}, state, { playVideo: true } );

		case WORLD_SELECT:
			return Object.assign( {}, state, { playVideo: false } );
	}

	return state;
}
