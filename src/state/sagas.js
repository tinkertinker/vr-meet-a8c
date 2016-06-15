import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import {
	PEOPLE_GET_ALL,
	PEOPLE_GET_ALL_SUCCESS,
	PEOPLE_GET_ALL_FAILED,
	PEOPLE_READ_BIO,
} from 'state/people/types';

const fetchUserAction = () => fetch( 'https://automattic.com/people.json', { method: 'get' } ).then( data => data.json() );

function* fetchUsers() {
	try {
		const users = yield call( fetchUserAction );

		yield put( {
			type: PEOPLE_GET_ALL_SUCCESS,
			users: users
		} );
	} catch ( e ) {
		yield put( {
			type: PEOPLE_GET_ALL_FAILED,
			message: e.message
		} );
	}
}

function* mySaga() {
	yield* takeLatest( PEOPLE_GET_ALL, fetchUsers );
}

export default mySaga;
