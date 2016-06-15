import { Entity } from 'aframe-react';
import cleanupText from 'lib/text';

function linePosition( position, offset ) {
	return [ position[0], position[1] - ( offset * 0.4 ), position[2] ];
}

const TextLine = ( props ) => {
	const { text, offset, size, colour, position } = props;
	const textProps = {
		text: text,
		size: size || 0.2,
		height: 0.01,    // The depth of the text
	};
	const textMaterial = {
		color: colour || 'white',
	};

	return (
		<Entity text={ textProps } position={ linePosition( position, offset ) } material={ textMaterial }></Entity>
	);
};

const Text = ( props ) => {
	const { text, maxWidth, position } = props;

	return (
		<Entity>
			{ cleanupText( text, maxWidth ).map( ( line, pos ) => <TextLine text={ line } position={ position } offset={ pos } key={ pos }/> ) }
		</Entity>
	);
};

export default Text;
