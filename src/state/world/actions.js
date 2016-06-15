/**
 * Internal dependencies
 */
import {
	WORLD_SET_FOCUS,
	WORLD_SELECT,
	WORLD_VIEW_GLOBE,
} from './types';

export function setWorldFocus( position ) {
	return {
		type: WORLD_SET_FOCUS,
		position,
	};
}

export function clearWorldFocus() {
	return {
		type: WORLD_SET_FOCUS,
		position: -1,
	};
}

export function selectWorld( world ) {
	return {
		type: WORLD_SELECT,
		position: world,
		view: 'world',
	};
}

export function selectHome() {
	return {
		type: WORLD_SELECT,
		position: -1,
		view: 'home',
	};
}

export function viewGlobe( world ) {
	return {
		type: WORLD_VIEW_GLOBE,
		world,
	};
}
