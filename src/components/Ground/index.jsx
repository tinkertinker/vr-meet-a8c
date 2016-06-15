import { Entity } from 'aframe-react';

const Ground = ( props ) => {
	const { width = 1000, length = 1000, position = [ 0, 0, 0 ], texture = 'background/floor.jpg' } = props;
	const geometry = {
		width: width,
		height: length,
		primitive: 'plane',
	};
	const material = {
		side: 'double',
		src: 'url(' + texture + ')',
		repeat: '40 40',
		color: '#555'
	};

	return (
		<Entity geometry={ geometry } material={ material } rotation={ [ 90, 0, 0 ] } position={ position }></Entity>
	);
};

export default Ground;
