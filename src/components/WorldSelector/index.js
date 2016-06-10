import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import WorldBar from './world-bar';
import WorldText from './world-text';
import {
	setWorldFocus,
	clearWorldFocus,
	selectWorld
} from 'state/actions';

const WorldSelector = ( props ) => {
	const { world, position, onFocus, onClearFocus, worldFocus, onSelectWorld } = props;
	const height = 0.5;
	const yOffset = ( height + 0.1 ) * position;

	return (
		<Entity onMouseEnter={ () => onFocus( position )} onMouseLeave={ () => onClearFocus() } onClick={ () => onSelectWorld( position ) }>
			<WorldBar yOffset={ yOffset } height={ height } background={ world.thumbnail } isSelected={ position === worldFocus }/>
			<WorldText text={ world.name } yOffset={ yOffset } isSelected={ position === worldFocus }/>
		</Entity>
	);
};

function mapStateToProps( state ) {
	return {
		worldFocus: state.world.worldFocus
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		onSelectWorld: ( position ) => {
			dispatch( selectWorld( position ) );
		},
		onFocus: ( position ) => {
			dispatch( setWorldFocus( position ) )
		},
		onClearFocus: () => {
			dispatch( clearWorldFocus() )
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( WorldSelector );
