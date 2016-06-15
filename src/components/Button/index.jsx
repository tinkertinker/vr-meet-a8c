import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const Button = ( props ) => {
	const { onClick, placement, position } = props;
	const geometry = {
		primitive: 'cylinder',
		height: 0.2,
		radius: 0.3,
	};
	const material = {
		color: 'red',
		transparent: true,
		opacity: 0.9,
	};
	const rotation = placement === 'wall' ? [ 90, 0, 0 ] : [ 0, 0, 0 ];

	return (
		<Entity geometry={ geometry } material={ material } position={ position } onClick={ () => onClick() } rotation={ rotation }></Entity>
	);
}

export default Button;
