import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';
import Text from '../Text';
import { readBio, showVideo } from 'state/people/actions';
import cleanupText from 'lib/text';
import adjustPosition from 'lib/position';

const GRAVATAR_IMAGE_SIZE = 2;
const GRAVATAR_DEPTH = 0.1;
const GRAVATAR_BOX_WIDTH = 9;
const GRAVATAR_BOX_HEIGHT = 2;

const GravatarImage = ( props ) => {
	const { size, position, onClick } = props;
	const geometry = {
		primitive: 'box',
		height: size,
		width: size,
		depth: GRAVATAR_DEPTH,
	};
	const material = {
		src: 'url(' + props.url.replace( 's=200', 's=512' ) + ')',
		transparent: true,
		opacity: 0.9,
	};

	return (
		<Entity geometry={ geometry } material={ material } position={ position } onClick={ onClick }></Entity>
	);
};

const GravatarBox = ( props ) => {
	const { width, height, position, onClick } = props;
	const geometry = {
		primitive: 'box',
		width,
		height,
		depth: GRAVATAR_DEPTH,
	};
	const material = {
		color: '#222'
	}

	return (
		<Entity geometry={ geometry } position={ position } material={ material } onClick={ onClick }></Entity>
	);
};

const Gravatar = ( props ) => {
	const { url, text, position, onReadBio, onShowVideo } = props;
	const blockX = ( GRAVATAR_IMAGE_SIZE / 2 ) + ( GRAVATAR_BOX_WIDTH / 2 );

	return (
		<Entity position={ adjustPosition( position, [ 0, 0, GRAVATAR_DEPTH] ) }>
			<GravatarImage position={ [ 0, 0, 0 ] } url={ url } size={ GRAVATAR_IMAGE_SIZE } onClick={ () => onShowVideo() }/>
			<GravatarBox position={ [ blockX, 0, 0 ] } width={ GRAVATAR_BOX_WIDTH } height={ GRAVATAR_BOX_HEIGHT } onClick={ () => onReadBio( cleanupText( text ) ) }/>
			<Text text={ text } maxWidth={ 70 } size={ 0.05 } position={ [ ( GRAVATAR_IMAGE_SIZE / 2 ) + 0.1, 0.65, 0.1 ] }/>
		</Entity>
	);
};

function mapDispatchToProps( dispatch ) {
	return {
		onReadBio: ( text ) => {
			dispatch( readBio( text ) );
		},
		onShowVideo: () => {
			dispatch( showVideo() );
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)( Gravatar );
