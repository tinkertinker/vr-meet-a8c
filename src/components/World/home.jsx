import React from 'react';
import 'aframe';
import 'aframe-text-component';
import { Entity } from 'aframe-react';

const Home = ( props ) => {
	const { onClick } = props;
	const geometry = {
		primitive: 'cylinder',
		height: 0.2,
		radius: 0.5,
	};
	const material = {
		color: 'red',
		transparent: true,
		opacity: 0.6,
	}

	return (
		<Entity geometry={ geometry } material={ material } position={ [ 0, -3, 3 ] } onClick={ () => onClick() }></Entity>
	);
}

export default Home;
