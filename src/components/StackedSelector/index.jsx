import React from 'react'
import 'aframe';
import { Entity } from 'aframe-react';

import StackedItem from './stacked-item';
import Ground from '../Ground';
import Sky from '../Sky';

const StackedSelector = ( props ) => {
	const { items } = props;

	return (
		<Entity>
			{ items.map( ( item, index ) => <StackedItem item={ item } key={ index } position={ index } max={ items.length }/> ) }

			<Sky url="sky/clouds.jpg"/>
			<Ground/>
		</Entity>
	);
};

export default StackedSelector;
