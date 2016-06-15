import { Entity } from 'aframe-react';
import Sky from '../Sky';
import Button from '../Button';
import { connect } from 'react-redux';
import { selectWorld } from 'state/world/actions';

const Globe = ( props ) => {
	const { onClick, world } = props;

	return (
		<Entity>
			<Sky url="sky/sky-john.jpg"/>
			<Button onClick={ () => onClick( world ) } placement="floor" position={ [ 0, 0, 0 ] }/>
		</Entity>
	);
};

function mapDispatchToProps( dispatch ) {
	return {
		onClick: ( world ) => {
			dispatch( selectWorld( world ) );
		},
	}
}

export default connect(
	null,
	mapDispatchToProps
)( Globe );
