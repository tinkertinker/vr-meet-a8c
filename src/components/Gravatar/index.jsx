import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const BioLine = ( props ) => {
	const { text, pos } = props;
	const textProps = {
		text: text,
		size: 0.2,       // Text height
		height: 0.01,    // The depth of the text
	};
	const textMaterial = {
		color: 'white',
	};

	return (
		<Entity text={ textProps } position={ [ 0.85, 0.47 - ( pos * 0.4 ), -0.9 ] } material={ textMaterial }></Entity>
	);
};

const Biograph = ( props ) => {
	const { text } = props;

	return (
		<Entity>
			{ text.map( ( line, pos ) => <BioLine text={ line } pos={ pos } key={ pos }/> ) }
		</Entity>
	);
};

const Gravatar = ( props ) => {
	const { url, text } = props;
	const gravatar = {
		primitive: 'box',
		height: 2,
		width: 1.3,
		depth: 0.1
	};
	const material = {
		src: 'url(' + url + ')',
		transparent: true,
		opacity: 0.9,
	};

	return (
		<Entity>
			<Entity geometry={ gravatar } material={ material } position={ [ 0, 0, -1 ] }></Entity>
			<Entity geometry={ { primitive: 'box', width: 7, height: 2, depth: 0.05 } } position={ [ 3, 0, -1 ] }></Entity>
			<Biograph text={ text }/>
		</Entity>
	);
};

export default Gravatar;
