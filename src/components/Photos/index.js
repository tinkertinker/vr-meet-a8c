import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const Photo = ( props ) => {
	const { url, pos } = props;

	return (
		<Entity position={ [ 0, 3.5 + ( pos * 3 ), -1 ] }>
			<a-curvedimage src={ url } height="3" radius="5.7" theta-length="72" rotation="0 140 0" scale={ [ 0.8, 0.8, 0.8 ] }></a-curvedimage>
		</Entity>
	);
};

const Photos = ( props ) => {
	const { photos } = props;

	return (
		<Entity>
			{ photos.map( ( url, pos ) => <Photo url={ url } key={ pos } pos={ pos }/> ) }
		</Entity>
	);
};

export default Photos;
