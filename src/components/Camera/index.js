import { Entity } from 'aframe-react';
import React from 'react';

export default props => {
	const { position } = props;

	return (
		<Entity position={ position }>
			<Entity camera look-controls wasd-controls>
				{ props.children }
			</Entity>
		</Entity>
	);
}
