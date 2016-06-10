/**
 * Internal dependencies
 */
import {
	WORLD_SET_FOCUS,
	WORLD_SELECT,
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
	};
}

export function selectHome() {
	return {
		type: WORLD_SELECT,
		position: -1,
	};
}
