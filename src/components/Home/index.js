import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadUsers } from 'state/people/actions';

const Home = React.createClass( {
	componentDidMount: function() {
		this.props.onLoadUsers();
	},

	render: function() {
		return (
			<div className="home">
				<h1>Virtual Automattic</h1>

				<h2>Instructions</h2>
				<p>Look-and-hold at an item to select it.</p>

				<h2>Desktop</h2>
				<p>Use the <code>WASD</code> keys to move around.</p>
				<p>Click and drag to move camera focus.</p>

				<h2>Notes</h2>
				<p>You can select a bio to have it read out</p>
				<p>You can select a gravatar to show a video (but it won't stop)</p>
				<p>You can select a sphere to show a 360 photosphere</p>

				{ this.props.status === 'loaded' && <p className="enter"><Link to="/vr">Enter the virtual world</Link></p> }
				{ this.props.status === 'loading' && <p className="enter">Loading users&hellip;</p> }
				{ this.props.status === 'failed' && <p className="enter">Failed to load users</p> }
			</div>
		);
	}
} );

function mapStateToProps( state ) {
	return state.people;
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
)( Home );
