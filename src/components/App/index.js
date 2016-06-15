import React from 'react'
import 'aframe';
import { Scene } from 'aframe-react';
import { connect } from 'react-redux';
import Camera from '../Camera'
import Cursor from '../Cursor'
import StackedSelector from '../StackedSelector';
import World from '../World';
import Globe from '../Globe';
import { loadUsers } from 'state/people/actions';

const App = React.createClass( {
	componentDidMount: function() {
		if ( this.props.worlds.length === 0 ) {
			this.props.onLoadUsers();
		}
	},

	render: function() {
		const { worlds, worldFocus, currentWorld, view, world } = this.props;
		let contents;

		if ( view === 'home' ) {
			contents = <StackedSelector items={ worlds }/>;
		} else if ( view === 'world' ) {
			contents = <World world={ worlds[currentWorld] }/>;
		} else if ( view === 'globe' ) {
			contents = <Globe world={ currentWorld }/>
		}

		return (
			<Scene>
				<Camera position={ [ -1.3, 1, 3 ] }>
					<Cursor isSelected={ worldFocus !== -1 }/>
				</Camera>

				{ contents }
			</Scene>
		);
	}
} );

function mapStateToProps( state ) {
	const { people, world } = state;

	return {
		view: world.view,
		world: world.world,
		worlds: people.list,
		worldFocus: world.worldFocus,
		currentWorld: world.currentWorld,
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		onLoadUsers: () => {
			dispatch( loadUsers() );
		},
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( App );
