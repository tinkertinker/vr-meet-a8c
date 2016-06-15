import React from 'react';
import 'aframe';
//import 'aframe-text-component';
import { Entity } from 'aframe-react';

const WorldText = ( props ) => {
	const { text, yOffset, isSelected } = props;
	const textProps = {
		text,
		size: 0.2,       // Text height
		height: 0.01,    // The depth of the text
	};
	const material = {
		color: isSelected ? 'yellow' : 'white',
	};

	return (
		<Entity text={ textProps } position={ [ -0.4, yOffset - 0.1, 0.05 ] } material={ material }></Entity>
	);
}

export default WorldText;
