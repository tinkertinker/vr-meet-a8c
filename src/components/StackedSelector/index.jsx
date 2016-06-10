import React from 'react'
import 'aframe';
import { Entity } from 'aframe-react';

import StackedItem from './stacked-item';

const StackedSelector = ( props ) => {
	const { items } = props;

	return (
		<Entity>
			{ items.map( ( item, index ) => <StackedItem item={ item } key={ index } position={ index }/> ) }

			<a-sky src="sky/sky.jpg"></a-sky>
			<Entity sound={ { src: 'music/main-waves.mp4', autoplay: true } }></Entity>
		</Entity>
	);
};

export default StackedSelector;
