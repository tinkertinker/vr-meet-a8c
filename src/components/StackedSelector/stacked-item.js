import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import WorldBar from './world-bar';
import {
	setWorldFocus,
	clearWorldFocus,
	selectWorld
} from 'state/world/actions';

const ITEM_WIDTH = 0.5;
const ITEM_HEIGHT = 0.5;
const ITEM_PER_ROW = 10;

const calcPosition = ( pos, max, width, height ) => {
	const row = Math.floor( pos / ITEM_PER_ROW );
	const placeInRow = pos % ITEM_PER_ROW;

	return [ -4 + ( placeInRow * width ) + ( ( placeInRow * width ) / 2 ), 2 * height, 0 - ( row * width ) + ( width / 2 ) ];
}

const StackedItem = ( props ) => {
	const { item, position, max, onFocus, onClearFocus, worldFocus, onSelectWorld } = props;

	return (
		<Entity onMouseEnter={ () => onFocus( position )} onMouseLeave={ () => onClearFocus() } onClick={ () => onSelectWorld( position ) }>
			<WorldBar height={ ITEM_HEIGHT } width={ ITEM_WIDTH } background={ item.image } isSelected={ position === worldFocus } position={ calcPosition( position, max, ITEM_WIDTH, ITEM_HEIGHT ) }/>
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
)( StackedItem );
