import { Entity, Animation } from 'aframe-react';
import React from 'react';

const Cursor = ( props ) => {
	const { isSelected } = props;
	const geometry = {
		primitive: 'ring',
		radiusInner: 0.01,
		radiusOuter: 0.016,
		thetaLength: 360,
	};
	const material = {
		color: isSelected ? 'red' : 'pink',
		shader: 'flat',
		opacity: 0.9,
		transparent: true
	};
	const cursor = {
		fuse: true,
		timeout: 1500,
		maxDistance: 30,
	}

	return (
		<Entity cursor={ cursor } geometry={ geometry } material={ material } position="0 0 -1">
			<Animation begin="click" easing="ease-in" attribute="geometry.thetaLength" to="360"></Animation>
			<Animation begin="fusing" easing="ease-in" attribute="geometry.thetaLength" fill="forwards" from="360" to="0"></Animation>
		</Entity>
	);
};

export default Cursor;
