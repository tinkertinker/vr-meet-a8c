import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const WorldBar = ( props ) => {
	const { height, yOffset, background, isSelected } = props;
	const worldSelector = {
		primitive: 'box',
		height: height,
		width: 1.3,
		depth: 0.1
	};
	const material = {
		src: 'url(' + background + ')',
		transparent: true,
		opacity: 0.6,
		color: isSelected ? 'red' : 'transparent',
	}

	return (
		<Entity geometry={ worldSelector } material={ material } position={ [ 0, yOffset, 0 ] }></Entity>
	);
};

export default WorldBar;
