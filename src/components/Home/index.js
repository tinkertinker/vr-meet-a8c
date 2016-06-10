import React from 'react';
import { Link } from 'react-router';

const Home = React.createClass( {
	render: function() {
		return (
			<div className="home">
				<h1>Meet A Tinker</h1>

				<h2>Instructions</h2>
				<p>Look-and-hold at an item to select it.</p>

				<h2>Desktop</h2>
				<p>Use the <code>WASD</code> keys to move around.</p>
				<p>Click and drag to move camera focus.</p>

				<p className="enter"><Link to="/vr">Enter the virtual world</Link></p>
			</div>
		);
	}
} );

export default Home;
