import React from 'react'
import 'aframe';
import { Scene } from 'aframe-react';

import Camera from '../Camera'
import Cursor from '../Cursor'
import WorldSelection from './world-selection';
import World from '../World';

const SelectorPage = ( props ) => {
	const { worlds, worldFocus, currentWorld } = props.world;

	return (
		<Scene>
			<Camera position="-1 0 3.5">
				<Cursor isSelected={ worldFocus !== -1 }/>
			</Camera>

			{ currentWorld === -1 ? <WorldSelection worlds={ worlds }/> : <World world={ worlds[currentWorld] }/> }
		</Scene>
	);
};

export default SelectorPage;
