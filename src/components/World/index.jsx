import React from 'react'
import 'aframe';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';
import Home from './home';
import Gravatar from '../Gravatar';
import Photos from '../Photos';
import {
	selectHome,
} from 'state/actions';

const World = ( props ) => {
	const { world, onHome } = props;

	return (
		<Entity>
			<a-sky src={ world.sky }></a-sky>

			<Home onClick={ onHome }/>

			<Entity>
				<Entity sound={ { src: world.music, autoplay: true, loop: true } }></Entity>

				<Gravatar url={ world.gravatar } text={ world.bio }/>
				<Photos photos={ world.photos }/>
			</Entity>
		</Entity>
	);
};

function mapStateToProps( state ) {
	return {};
}

function mapDispatchToProps( dispatch ) {
	return {
		onHome: () => {
			dispatch( selectHome() )
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( World );
