import { Entity } from 'aframe-react';

const Painting = ( props ) => {
	const { url, position, width, height, placement } = props;
	let rotation;

	if ( placement === 'west' ) {
		rotation = [ 0, 90, 0 ];
	} else if ( placement === 'east' ) {
		rotation = [ 0, -90, 0 ];
	} else if ( placement === 'south' ) {
		rotation = [ 0, 180, 0 ];
	}

	return (
		<Entity rotation={ rotation } position={ position }>
			<a-image src={ url } width={ width } height={ height }></a-image>
		</Entity>
	);
};

export default Painting;
