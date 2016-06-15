import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const WorldBar = ( props ) => {
	const { height, width, position, background, isSelected } = props;
	const worldSelector = {
		primitive: 'box',
		height: height,
		width: width,
		depth: 0.1
	};
	let material = {
		src: 'url(' + background.replace( 's=200', 's=512' ) + ')',
		transparent: true,
		opacity: 0.9,
	};

	if ( isSelected ) {
		material.color = 'red';
	}

	return (
		<Entity geometry={ worldSelector } material={ material } position={ position }></Entity>
	);
};

export default WorldBar;
