import React from 'react'
import 'aframe';
import { Entity } from 'aframe-react';
import Ground from '../Ground';

const Wall = ( props ) => {
	const { width, height, position, rotate = 0, texture } = props;
	const geometry = {
		width: width,
		height: height,
		primitive: 'plane',
	};
	const material = {
		side: 'double',
		src: 'url(' + texture + ')',
		repeat: '40 40',
		color: '#555'
	};

	return (
		<Entity geometry={ geometry } material={ material } rotation={ [ 0, rotate, 0 ] } position={ position }></Entity>
	);
};

const Room = React.createClass( {
	render: function() {
		const { width, height, length } = this.props;

		// Walls arranged N, S, E, W
		return (
			<Entity>
				<Ground width={ width } length={ length } texture="background/room-floor.jpg"/>

				<Wall width={ width } height={ height } position={ [ 0, Math.floor( height / 2 ), 0 - ( length / 2 ) ] } texture="background/room-wall.jpg"/>
				<Wall width={ width } height={ height } position={ [ 0, Math.floor( height / 2 ), ( length / 2 ) ] } texture="background/room-wall.jpg"/>
				<Wall width={ length } height={ height } position={ [ 0 - ( width / 2 ), Math.floor( height / 2 ), 0 ] } rotate={ 90 } texture="background/room-wall.jpg"/>
				<Wall width={ length } height={ height } position={ [ ( width / 2 ), Math.floor( height / 2 ), 0 ] } rotate={ 90 } texture="background/room-wall.jpg"/>

				<Ground width={ width } length={ length } position={ [ 0, height, 0 ] }/>

				{ this.props.children }
			</Entity>
		);
	}
} );

export default Room;
