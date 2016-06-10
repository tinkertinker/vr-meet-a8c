import React from 'react'
import 'aframe';
import { Scene } from 'aframe-react';
import { connect } from 'react-redux';
import Camera from '../Camera'
import Cursor from '../Cursor'
import WorldSelection from '../WorldSelector/world-selection';
import World from '../World';

const App = React.createClass( {
	render: function() {
		const { worlds, worldFocus, currentWorld } = this.props;

		return (
			<Scene>
				<Camera position="-1 0 3.5">
					<Cursor isSelected={ worldFocus !== -1 }/>
				</Camera>

				{ currentWorld === -1 ? <WorldSelection worlds={ worlds }/> : <World world={ worlds[currentWorld] }/> }
			</Scene>
		);
	}
} );

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps( state ) {
	const { world } = state;

	return {
		worlds: world.worlds,
		worldFocus: world.worldFocus,
		currentWorld: world.currentWorld,
	};
}

function mapDispatchToProps( dispatch ) {
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( App );
