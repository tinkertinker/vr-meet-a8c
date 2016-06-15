/**
 * Internal dependencies
 */
import {
	PEOPLE_GET_ALL,
	PEOPLE_READ_BIO,
	PEOPLE_SHOW_VIDEO,
	PEOPLE_HIDE_VIDEO,
} from './types';

export function loadUsers() {
	return {
		type: PEOPLE_GET_ALL,
	};
}

export function readBio( text ) {
	const msg = new SpeechSynthesisUtterance( text );

	window.speechSynthesis.speak( msg );
	return {
		type: PEOPLE_READ_BIO,
		text
	};
}

export function showVideo() {
	return {
		type: PEOPLE_SHOW_VIDEO,
	};
}
