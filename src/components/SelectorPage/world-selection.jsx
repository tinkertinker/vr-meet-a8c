import React from 'react'
import 'aframe';
import { Entity } from 'aframe-react';

import WorldSelector from '../WorldSelector';

const WorldSelection = ( props ) => {
	const { worlds } = props;

	return (
		<Entity>
			{ worlds.map( ( world, index ) => <WorldSelector world={ world } key={ index } position={ index }/> ) }

			<a-sky src="sky/sky.jpg"></a-sky>
			<Entity sound={ { src: 'music/main-waves.mp4', autoplay: true } }></Entity>
		</Entity>
	);
};

export default WorldSelection;
